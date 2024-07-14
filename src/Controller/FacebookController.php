<?php

namespace Drupal\login_rx_vuejs\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
use Drupal\login_rx_vuejs\SdkFacebook;
use Drupal\login_rx_vuejs\Services\loginRxVuejs as UserAuth;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Random;
use Drupal\Core\Url;

/**
 * Returns responses for Login rx vuejs routes.
 */
class FacebookController extends ControllerBase {
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
    $content = $Request->getContent();
    $content = Json::decode($content);
    if (!empty($content['authResponse']) && !empty($content['status']) && $content['status'] == 'connected') {
      $authResponse = $content['authResponse'];
      $content = SdkFacebook::getUserInfos($authResponse['accessToken'], $authResponse['userID']);
      if (!empty($content['body'])) {
        $content = $content['body'];
        $uid = $this->UserAuth->loadByMailOrLogin($content['email']);
        if ($uid)
          return $this->reponse($this->UserAuth->connectUser($uid));
        else
          return $this->reponse([
            'createuser' => true
          ]);
      }
    }
    return $this->reponse($content);
  }
  
  /**
   * Permet de
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function DeleteAccount() {
    $content = [];
    $signed_request = $_POST['signed_request'];
    $data = $this->parse_signed_request($signed_request);
    // $user_id = $data['user_id'];
    
    // Start data deletion
    $Url = Url::fromRoute("login_rx_vuejs.facebook_status_deletion", [
      'uid' => $this->currentUser()->id()
    ]);
    $Url->setAbsolute();
    $Random = new Random();
    $status_url = $Url->toString();
    $confirmation_code = $this->currentUser()->id() . '-' . $Random->name();
    
    $content = array(
      'url' => $status_url,
      'confirmation_code' => $confirmation_code
    );
    return $this->reponse($content);
  }
  
  /**
   * Permet de suivre le processus de suppresion.
   */
  public function StatusDeletionAccount($uid) {
    $this->messenger()->addStatus(" Votre compte et toutes les données associer  ont été supprimé ");
    return [];
  }
  
  protected function parse_signed_request($signed_request) {
    list($encoded_sig, $payload) = explode('.', $signed_request, 2);
    
    $secret = "appsecret"; // Use your app secret here
                           
    // Decode the data
    $sig = $this->base64_url_decode($encoded_sig);
    $data = json_decode($this->base64_url_decode($payload), true);
    
    // confirm the signature
    $expected_sig = hash_hmac('sha256', $payload, $secret, $raw = true);
    if ($sig !== $expected_sig) {
      error_log('Bad Signed JSON signature!');
      return null;
    }
    
    return $data;
  }
  
  protected function base64_url_decode($input) {
    return base64_decode(strtr($input, '-_', '+/'));
  }
  
  /**
   * Essaie de connecter l'utilisteur ou cree un compte à partir de son
   * access_token facebook'.
   */
  public function Connexion(Request $Request) {
    $datas = $Request->getContent();
    $datas = Json::decode($datas);
    $content = $datas['facebook'];
    $user = $datas['fields'];
    
    if (!empty($content['authResponse']) && !empty($content['status']) && $content['status'] == 'connected') {
      $authResponse = $content['authResponse'];
      $content = SdkFacebook::getUserInfos($authResponse['accessToken'], $authResponse['userID']);
      if (!empty($content['body'])) {
        $content = $content['body'];
        $uid = $this->UserAuth->loadByMailOrLogin($content['email']);
        if ($uid)
          return $this->reponse($this->UserAuth->connectUser($uid));
        else {
          // On cree le compte.
          $Random = new Random();
          $username = Html::getId($content['first_name']) . "--" . time();
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
          return $this->reponse($this->UserAuth->connectUser($uid));
        }
      }
    }
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