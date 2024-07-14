<?php

namespace Drupal\login_rx_vuejs\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
use Drupal\login_rx_vuejs\Services\loginRxVuejs as UserAuth;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\login_rx_vuejs\Services\loginRxVuejsException;
use Drupal\user\Entity\User;
use Stephane888\DrupalUtility\HttpResponse;
use Stephane888\Debug\Repositories\ConfigDrupal;
use Symfony\Component\Mime\Header\MailboxHeader;
use Symfony\Component\Mime\Address;

/**
 * Returns responses for Login rx vuejs routes.
 */
class LoginRxVuejsController extends ControllerBase {
  protected $UserAuth;
  
  public function __construct(UserAuth $UserAuth) {
    $this->UserAuth = $UserAuth;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    // return new static($container->get('prestashop_rest_api.cron'),
    // $container->get('prestashop_rest_api.build_product_to_drupal'));
    return new static($container->get('login_rx_vuejs.identification'));
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\Core\Controller\ControllerBase::currentUser()
   */
  public function currentUser() {
    $id = \Drupal::currentUser()->id();
    if ($id) {
      $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
      // $serializer = \Drupal::service('serializer');
      // $data = $serializer->serialize($user, 'json', [
      // 'plugin_id' => 'entity'
      // ]);
      $data = $user->toArray();
    }
    else {
      $data = $id;
    }
    return HttpResponse::response($data);
  }
  
  public function GenratePassword(Request $Request) {
    $config = $this->config('login_rx_vuejs.settings')->getRawData();
    $content = $Request->getContent();
    $content = Json::decode($content);
    $id = \Drupal::currentUser()->id();
    if ($id) {
      $user = User::load($id);
      return HttpResponse::response($user->toArray());
    }
    $email = $content['mail'][0]['value'];
    if (!\Drupal::service('email.validator')->isValid($email)) {
      return HttpResponse::response($content, '400', "Email non valide");
    }
    // on doit renvoyer ce processus dans un service (car on a le meme
    // code deux foix ).
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
    //
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
  
  /**
   * Pour l'envoit de mail on charger le plugin.mail configurer par defaut via
   * le
   * module MailSystem.
   *
   * @param string $to
   * @param string $password
   */
  protected function sendMail($to, $password) {
    $siteInfo = ConfigDrupal::config('system.site');
    $mailSystem = ConfigDrupal::config('mailsystem.settings');
    
    /**
     * On initialise le chargeur de plugin de mail.
     *
     * @var \Drupal\Core\Mail\MailManager $PluginMailManger
     */
    $PluginMailManger = \Drupal::service('plugin.manager.mail');
    
    /**
     * On recupere l'instance à partir de l'id du plugin.
     *
     * @var \Drupal\Core\Mail\MailInterface $mailPlugin
     */
    $mailPlugin = $PluginMailManger->createInstance($mailSystem['defaults']['sender']);
    // $module = 'login_rx_vuejs';
    $key = 'login_rx_vuejs_send_mail';
    $message = ' <h2> Retrouvez ci-dessous vos paramettres d\'identification </h2> ';
    $message .= '<p> login : <strong> ' . $to . ' </strong> </p>';
    $message .= '<p> password : <strong> ' . $password . ' </strong> </p>';
    
    $datas = [
      'id' => $key,
      'to' => $to,
      'subject' => ' Paramettres de connexion ' . $siteInfo['name'],
      'body' => $message,
      'headers' => [
        'From' => $siteInfo['mail'],
        'Sender' => $siteInfo['mail'],
        'Return-Path' => $siteInfo['mail']
      ]
    ];
    $mailbox = new MailboxHeader('From', new Address($siteInfo['mail'], $siteInfo['name']));
    $datas['headers']['From'] = $mailbox->getBodyAsString();
    $result = $mailPlugin->mail($datas);
    if (!$result) {
      $message = t(' There was a problem sending your email notification to @email. ', array(
        '@email' => $to
      ));
      $this->getLogger('login_rx_vuejs')->alert($message);
    }
  }
  
  /**
   * Connexion de l'utilisateur
   */
  public function userConnexion(Request $Request) {
    try {
      $content = $Request->getContent();
      $content = Json::decode($content);
      $password = null;
      if (!empty($content['pass']))
        $password = $content['pass'][0]['value'];
      // @deprecated, dont use this. @use ['pass']
      elseif (!empty($content['password']))
        $password = !empty($content['password']) ? $content['password'][0]['value'] : null;
      
      $login = !empty($content['name']) ? $content['name'][0]['value'] : null;
      if (!$login) {
        $login = $content['mail'][0]['value'];
      }
      $content = $this->UserAuth->authentification($login, $password);
      return HttpResponse::response($content);
    }
    catch (loginRxVuejsException $e) {
      $content['message'] = $e->getMessage();
      $content['code'] = $e->getCode() ? $e->getCode() : 435;
      $content["loginRxVuejsException"] = $e->getTrace();
      return HttpResponse::response($content, $content['code'], $content['message']);
    } //
    catch (\Exception $e) {
      $content['message'] = $e->getMessage();
      $content['code'] = $e->getCode() ? $e->getCode() : 435;
      $content["Exception"] = $e->getTrace();
      return HttpResponse::response($content, $content['code'], $content['message']);
    } //
    catch (\Error $e) {
      $content['message'] = $e->getMessage();
      $content['code'] = $e->getCode() ? $e->getCode() : 435;
      $content["Error"] = $e->getTrace();
      return HttpResponse::response($content, $content['code'], $content['message']);
    }
  }
  
  /**
   *
   * @param Request $Request
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function CheckUserStatus(Request $Request) {
    $content = Json::decode($Request->getContent());
    $login = !empty($content['name']) ? $content['name'][0]['value'] : null;
    $content = null;
    $msg = "";
    $code = 200;
    if ($login) {
      $content = $this->UserAuth->loadByMailOrLogin($login);
    }
    return HttpResponse::response($content, $code, $msg);
  }
  
  /**
   * --
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function getConfigs() {
    return HttpResponse::response($this->UserAuth->getConfigs());
  }
  
}
