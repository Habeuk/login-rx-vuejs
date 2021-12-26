<?php

namespace Drupal\login_rx_vuejs\EventSubscriber;

use Drupal\Core\Messenger\MessengerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Creneaux Shopify event subscriber.
 */
class loginRxVuejsSubscriber implements EventSubscriberInterface {
	
	/**
	 *
	 * {@inheritdoc}
	 */
	public static function getSubscribedEvents(){
		return [
				KernelEvents::RESPONSE=> [
						'setHeaderContentSecurityPolicy',
						- 10
				]
		];
	}
	
	/**
	 * Set header 'Content-Security-Policy' to response to allow embedding in iFrame.
	 */
	public function setHeaderContentSecurityPolicy(FilterResponseEvent $event){
	
		$response = $event->getResponse();
		// $response->headers->remove( 'X-Frame-Options' );
		// permet de bloquer les popups avec les liens externes.
		// $response->headers->set( 'Cross-Origin-Opener-Policy', "same-origin" );
		// $response->headers->set( 'Cross-Origin-Embedder-Policy', "require-corp" );
		// ouvrir
		$response->headers->set( 'Cross-Origin-Opener-Policy', "same-origin-allow-popups" );
		$response->headers->set( 'Cross-Origin-Embedder-Policy', "unsafe-none" );
	}
}