<?php

namespace Drupal\login_rx_vuejs\Services;

use Drupal\mail_login\AuthDecorator as UserAuth;
use Drupal\user\Entity\User;

/**
 *
 * @author stephane
 *
 */
class loginRxVuejs {
  protected $UserAuth;
  
  public function __construct(UserAuth $UserAuth) {
    $this->UserAuth = $UserAuth;
  }
  
  /**
   *
   * @param string $username
   * @param string $password
   * @return []
   */
  public function authentification($username, $password) {
    $uid = $this->UserAuth->authenticate($username, $password);
    return $this->connectUser($uid);
  }
  
  /**
   *
   * @param int $uid
   * @return void|array
   */
  public function connectUser($uid) {
    if ($uid) {
      $user = User::load($uid);
      user_login_finalize($user);
      $serializer = \Drupal::service('serializer');
      $data = $serializer->serialize($user, 'json', ['plugin_id' => 'entity'
      ]);
      return $data;
    }
    else
      throw new loginRxVuejsException(
          ' Votre login ou mot de passe est incorrect ', 408);
  }
  
  /**
   * Retourne l'id de l"utilisateur, à partir de son username ou de son email.
   *
   * @param string $mail
   * @return mixed|boolean
   */
  public function loadByMailOrLogin($mail) {
    // https://www.drupal.org/node/2214507
    $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties(
        ['mail' => $mail
        ]);
    if ($users) {
      return array_key_first($users);
    }
    //
    $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties(
        ['name' => $mail
        ]);
    if ($users)
      return array_key_first($users);
    return FALSE;
  }
  
  /**
   * Creation d'un utilisateur.
   */
  public function createUser($user) {
    $c = User::create($user);
    $c->save();
    return $c->id();
  }
  
}