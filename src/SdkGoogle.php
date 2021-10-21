<?php

namespace Drupal\login_rx_vuejs;

use Google\Client as GoogleClient;
use Google\Service\Oauth2;
use Drupal\login_rx_vuejs\Services\loginRxVuejsException;

class SdkGoogle {
  
  static function loadCurrentUserInfo($googleUser) {
    // access_token
    if (!empty($googleUser['client_id'])) {
      $client = new GoogleClient(['client_id' => $googleUser['client_id']
      ]); // Specify the CLIENT_ID of the app that accesses the backend
      $payload = $client->verifyIdToken($googleUser['id_token']);
      if ($payload) {
        return $payload;
      }
      else {
        throw new loginRxVuejsException("Token id invalide");
      }
    }
    elseif (!empty($googleUser['access_token'])) {
      $client = new GoogleClient();
      $client->setAccessToken($googleUser['access_token']);
      $google_oauth = new Oauth2($client);
      $google_account_info = $google_oauth->userinfo->get();
      return ['id' => $google_account_info->id,
        'first_name' => $google_account_info->givenName,
        'last_name' => $google_account_info->familyName,
        'name' => $google_account_info->givenName . ' ' .
        $google_account_info->familyName, 'email' => $google_account_info->email,
        'picture' => $google_account_info->picture
      ];
    }
    else {
      throw new loginRxVuejsException("identifiant non definit");
    }
  }
  
}