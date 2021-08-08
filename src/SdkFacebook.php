<?php

namespace Drupal\login_rx_vuejs;

use Drupal\Component\Serialization\Json;
use Facebook\Facebook;

class SdkFacebook {
	protected static $http_client_handler = "stream";
	public static function getUserInfos($accessToken, $id, $query = "fields=id,name,email,first_name,last_name,middle_name,picture"){
		// on met les id en durs, on ferra la MAJ avant de mettre en ligne.
		$appId = 889256191665205;
		$appSecret = "242ce7d23f19d8aabd450f8eaf1fe91b";
		$version = 'v2.10';
		$fb = new Facebook( [
				'app_id'=> $appId,
				'app_secret'=> $appSecret,
				'default_graph_version'=> $version,
				'http_client_handler'=> self::$http_client_handler
		] );
		try{
			$url = '/' . $id . '?' . $query;
			$resp = $fb->get( $url, $accessToken );
			return [
					'body'=> Json::decode( $resp->getBody() )
			];
		}
		catch( \Facebook\Exceptions\FacebookResponseException $e ){
			// When Graph returns an error.
			return [
					'error'=> 'graph',
					'e'=> $e
			];
		}
		catch( \Facebook\Exceptions\FacebookSDKException $e ){
			// When validation fails or other local issues.
			return [
					'error'=> 'validation',
					'e'=> $e
			];
		}
	}
}