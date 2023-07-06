<?php

namespace Drupal\login_rx_vuejs\Services;

use Drupal\mail_login\AuthDecorator as UserAuth;
use Drupal\user\Entity\User;
use Stephane888\Debug\Repositories\ConfigDrupal;

/**
 *
 * @author stephane
 *        
 */
class loginRxVuejs {
  protected $UserAuth;
  protected $configs = [];
  
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
      $configs = $this->getConfigs();
      $user = User::load($uid);
      /**
       * NB : il faut ajouter un paramettre dans le module loginRx et rettirer
       * le test du module lesroisdelareno.
       */
      if ($configs['load_user_by_access_domain']) {
        // $this->validUserByDomain($user);
      }
      user_login_finalize($user);
      // $serializer = \Drupal::service('serializer');
      // $data = $serializer->serialize($user, 'json', ['plugin_id' => 'entity'
      // ]);
      return $user->toArray();
    }
    else
      throw new loginRxVuejsException(' Votre login ou mot de passe est incorrect ', 408);
  }
  
  /**
   * Permet de limiter la connexion à des sites donc on a access.
   * //field_domain_access // liste des sites donc on peut se connecte.
   * //field_domain_admin // liste des sites donc on peut modifier les contenus.
   * //field_domain_all_affiliates
   */
  private function validUserByDomain(User $user) {
    if (!$user->hasRole('administrator')) {
      /**
       *
       * @var \Drupal\domain_source\HttpKernel\DomainSourcePathProcessor $domain_source
       */
      $domain_source = \Drupal::service('domain_source.path_processor');
      $domain = $domain_source->getActiveDomain();
      if ($domain) {
        $domainsAccess = $user->get('field_domain_access')->getValue();
        if ($domainsAccess) {
          $domains = [];
          foreach ($domainsAccess as $value) {
            $domains[] = $value['target_id'];
          }
          if ($domains) {
            return in_array($domain->id(), $domains);
          }
        }
      }
      //
      throw new loginRxVuejsException(" Votre login ou mot de passe est incorrect, ou demander à l'administrateur de crrer votre compte ", 408);
    }
  }
  
  /**
   * Retourne l'id de l"utilisateur, à partir de son username ou de son email.
   *
   * @param string $mail
   * @return mixed|boolean
   */
  public function loadByMailOrLogin($mail) {
    $configs = $this->getConfigs();
    if ($configs['load_user_by_access_domain']) {
      $fieldAccess = \Drupal\domain_access\DomainAccessManagerInterface::DOMAIN_ACCESS_FIELD;
      /**
       *
       * @var \Drupal\domain_source\HttpKernel\DomainSourcePathProcessor $domain_source
       */
      $domain_source = \Drupal::service('domain_source.path_processor');
      $domain = $domain_source->getActiveDomain();
      /**
       * On charge l'utilisateur en function des domains access.
       *
       * @var array $users
       */
      $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties([
        'name' => $mail
        // $fieldAccess => $domain->id()
      ]);
      if ($users) {
        return array_key_first($users);
      }
      $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties([
        'mail' => $mail
        // $fieldAccess => $domain->id()
      ]);
      if ($users) {
        return array_key_first($users);
      }
    }
    // https://www.drupal.org/node/2214507
    else {
      $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties([
        'name' => $mail
      ]);
      if ($users)
        return array_key_first($users);
      //
      $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties([
        'mail' => $mail
      ]);
      if ($users)
        return array_key_first($users);
    }
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
  
  /**
   * Charge la config.
   */
  public function getConfigs() {
    if (!$this->configs) {
      $this->configs = ConfigDrupal::config('login_rx_vuejs.settings');
    }
    return $this->configs;
  }
  
}