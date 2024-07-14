<?php

namespace Drupal\login_rx_vuejs\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\login_rx_vuejs\Services\loginRxVuejs as UserAuth;
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Random;
use Google\Client as GoogleClient;
use Google\Service\Oauth2;
use Drupal\login_rx_vuejs\SdkGoogle;
use Drupal\login_rx_vuejs\Services\loginRxVuejsException;
use Drupal\user\Entity\User;
use Stephane888\DrupalUtility\HttpResponse;

class GoogleController extends ControllerBase {
  protected $UserAuth;
  
  public function __construct(UserAuth $UserAuth) {
    $this->UserAuth = $UserAuth;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('login_rx_vuejs.identification'));
  }
  
  /**
   * Verifie si l'utilisateur existe, si c'est le cas connecte le sinon cree son
   * compte.
   */
  public function CheckUser(Request $Request) {
    try {
      $content = $Request->getContent();
      $googleUser = Json::decode($content);
      $content = SdkGoogle::loadCurrentUserInfo($googleUser);
      if (!empty($content['email'])) {
        $uid = $this->UserAuth->loadByMailOrLogin($content['email']);
        if ($uid)
          return HttpResponse::response($this->UserAuth->connectUser($uid));
        else {
          $email = $content['email'];
          // on doit renvoyer ce processus dans un service (car on a le meme
          // code deux foix ).
          $config = $this->config('login_rx_vuejs.settings')->getRawData();
          /**
           *
           * @var \Drupal\Core\Password\DefaultPasswordGenerator $pass_manager
           */
          $pass_manager = \Drupal::service('password_generator');
          $password = $pass_manager->generate(15);
          $values = [
            'mail' => $email,
            'password' => $password,
            'name' => $email,
            'status' => 1
          ];
          $user = User::create($values);
          $user->save();
          //
          $roles = [];
          if (!empty($config['add_roles'])) {
            foreach ($config['add_roles'] as $value) {
              if ($value)
                $roles[] = $value;
            }
            $user->set('roles', array_unique($roles));
          }
          // set password
          $user->setPassword($password);
          $user->save();
          $this->UserAuth->connectUser($user->id());
          $this->sendMail($email, $password);
          //
          return HttpResponse::response([
            'user' => $user->toArray(),
            'password' => $password,
            'config' => $config,
            'roles' => $roles
          ]);
        }
        // return HttpResponse::response([
        // 'createuser' => true
        // ]);
      }
      return HttpResponse::response($content);
    }
    catch (loginRxVuejsException $e) {
      return HttpResponse::response($e->getTrace(), 401, $e->getMessage());
    }
    catch (\Exception $e) {
      return HttpResponse::response($e->getTrace(), 401, $e->getMessage());
    }
  }
  
  /**
   *
   * @param string $to
   * @param string $password
   * @deprecated ( duplicate )
   */
  protected function sendMail($to, $password) {
    $mailManager = \Drupal::service('plugin.manager.mail');
    $module = 'login_rx_vuejs';
    $key = 'login_rx_vuejs_send_mail';
    $params['message'] = ' <h2> Retrouvez ci-dessous vos paramettres d\'identification </h2> ';
    $params['message'] .= '<p> login : <strong> ' . $to . ' </strong> </p>';
    $params['message'] .= '<p> password : <strong> ' . $password . ' </strong> </p>';
    $params['subject'] = ' Paramettres de connexion ';
    $langcode = \Drupal::currentUser()->getPreferredLangcode();
    $send = true;
    $result = $mailManager->mail($module, $key, $to, $langcode, $params, NULL, $send);
    if ($result['result'] != true) {
      $message = t(' There was a problem sending your email notification to @email. ', array(
        '@email' => $to
      ));
      $this->getLogger('login_rx_vuejs')->alert($message);
    }
  }
  
  /**
   * Essaie de connecter l'utilisteur ou cree un compte à partir de son
   * access_token facebook'.
   */
  public function Connexion(Request $Request) {
    $datas = $Request->getContent();
    $datas = Json::decode($datas);
    $content = $datas['google'];
    $user = $datas['fields'];
    
    if (!empty($content['name']) && !empty($content['email'])) {
      $uid = $this->UserAuth->loadByMailOrLogin($content['email']);
      if ($uid)
        return HttpResponse::response($this->UserAuth->connectUser($uid));
      else {
        // On cree le compte.
        $Random = new Random();
        $username = Html::getId($content['name']) . "--" . time();
        $user['name'] = [
          'value' => $username
        ];
        $user['pass'] = [
          'value' => $Random->string(8, true)
        ];
        $user['mail'] = [
          'value' => $content['email']
        ];
        $uid = $this->UserAuth->createUser($user);
        return HttpResponse::response($this->UserAuth->connectUser($uid));
      }
    }
    return HttpResponse::response($content);
  }
  
  /**
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function Callback() {
    $clientID = $cf_g['app_id'];
    $clientSecret = $cf_g['app_secret'];
    $redirectUri = $cf_g['redirectUri'];
    $client = new GoogleClient();
    $client->setClientId($clientID);
    $client->setClientSecret($clientSecret);
    $client->setRedirectUri($redirectUri);
    $client->addScope([
      "email",
      "profile"
    ]);
    if (isset($_GET['code'])) {
      $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
      
      $client->setAccessToken($token['access_token']);
      // get profile info
      $google_oauth = new Oauth2($client);
      $google_account_info = $google_oauth->userinfo->get();
      $results = [
        'id' => $google_account_info->id,
        'first_name' => $google_account_info->givenName,
        'last_name' => $google_account_info->familyName,
        'name' => $google_account_info->givenName . ' ' . $google_account_info->familyName,
        'email' => $google_account_info->email,
        'picture' => $google_account_info->picture
      ];
    }
    $content = [];
    return HttpResponse::response($content);
  }
  
  /**
   *
   * @param array|string $configs
   * @param number $code
   * @param string $message
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  protected function reponse($configs, $code = null, $message = null) {
    if (!is_string($configs))
      $configs = Json::encode($configs);
    $reponse = new JsonResponse();
    if ($code)
      $reponse->setStatusCode($code, $message);
    $reponse->setContent($configs);
    return $reponse;
  }
  
}