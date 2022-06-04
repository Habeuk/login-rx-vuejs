<?php

namespace Drupal\login_rx_vuejs\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
// use Drupal\mail_login\AuthDecorator as UserAuth;
use Drupal\login_rx_vuejs\Services\loginRxVuejs as UserAuth;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\login_rx_vuejs\Services\loginRxVuejsException;

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
    return $this->reponse($data);
  }
  
  /**
   * Connexion de l'utilisateur
   */
  public function userConnexion(Request $Request) {
    $code = 200;
    $msg = "";
    $content = $Request->getContent();
    $content = Json::decode($content);
    $password = !empty($content['password']) ? $content['password'][0]['value'] : null;
    $login = !empty($content['name']) ? $content['name'][0]['value'] : null;
    if (!$login) {
      $login = $content['mail'][0]['value'];
    }
    
    try {
      $content = $this->UserAuth->authentification($login, $password);
    }
    catch (loginRxVuejsException $e) {
      $msg = $e->getMessage();
      $code = $e->getCode();
      $content["loginRxVuejsException"] = $e->getTrace();
    } //
    catch (\Exception $e) {
      $msg = $e->getMessage();
      $code = $e->getCode();
      $content["Exception"] = $e->getTrace();
    } //
    catch (\Error $e) {
      $msg = $e->getMessage();
      $code = $e->getCode();
      $content["Error"] = $e->getTrace();
    }
    return $this->reponse($content, $code, $msg);
  }
  
  public function CheckUserStatus(Request $Request) {
    $content = Json::decode($Request->getContent());
    $login = !empty($content['name']) ? $content['name'][0]['value'] : null;
    $content = null;
    $msg = "";
    $code = 200;
    if ($login) {
      $content = $this->UserAuth->loadByMailOrLogin($login);
    }
    return $this->reponse($content, $code, $msg);
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
