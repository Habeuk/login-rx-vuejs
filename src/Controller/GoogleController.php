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
   * Essaie de connecter l'utilisteur ou cree un compte à partir de son
   * access_token facebook'.
   */
  public function CheckUser(Request $Request) {
    try {
      $content = $Request->getContent();
      $googleUser = Json::decode($content);
      $content = SdkGoogle::loadCurrentUserInfo($googleUser);
      if (!empty($content['email'])) {
        $uid = $this->UserAuth->loadByMailOrLogin($content['email']);
        if ($uid)
          return $this->reponse($this->UserAuth->connectUser($uid));
        else
          return $this->reponse(['createuser' => true
          ]);
      }
      return $this->reponse($content);
    }
    catch (loginRxVuejsException $e) {
      return $this->reponse($e->getTrace(), 401, $e->getMessage());
    }
    catch (\Exception $e) {
      return $this->reponse($e->getTrace(), 401, $e->getMessage());
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
        return $this->reponse($this->UserAuth->connectUser($uid));
      else {
        // On cree le compte.
        $Random = new Random();
        $username = Html::getId($content['name']) . "--" . time();
        $user['name'] = ['value' => $username
        ];
        $user['pass'] = ['value' => $Random->string(8, true)
        ];
        $user['mail'] = ['value' => $content['email']
        ];
        $uid = $this->UserAuth->createUser($user);
        return $this->reponse($this->UserAuth->connectUser($uid));
      }
    }
    return $this->reponse($content);
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
    $client->addScope(["email", "profile"
    ]);
    if (isset($_GET['code'])) {
      $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
      
      $client->setAccessToken($token['access_token']);
      // get profile info
      $google_oauth = new Oauth2($client);
      $google_account_info = $google_oauth->userinfo->get();
      $results = ['id' => $google_account_info->id,
        'first_name' => $google_account_info->givenName,
        'last_name' => $google_account_info->familyName,
        'name' => $google_account_info->givenName . ' ' .
        $google_account_info->familyName, 'email' => $google_account_info->email,
        'picture' => $google_account_info->picture
      ];
    }
    $content = [];
    return $this->reponse($content);
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