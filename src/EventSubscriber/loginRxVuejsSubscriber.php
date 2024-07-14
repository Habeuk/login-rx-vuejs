<?php

namespace Drupal\login_rx_vuejs\EventSubscriber;

use Drupal\Core\Messenger\MessengerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Drupal\Core\Routing\TrustedRedirectResponse;

// use Symfony\Component\HttpKernel\Event\RequestEvent;

/**
 * Creneaux Shopify event subscriber.
 */
class loginRxVuejsSubscriber implements EventSubscriberInterface {

  /**
   *
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events = [];
    $events[KernelEvents::RESPONSE][] = [
      'setHeaderContentSecurityPolicy',
      -10
    ];
    // $events[KernelEvents::REQUEST][] = array(
    // 'checkForRedirection',
    // 50
    // );
    return $events;
  }

  /**
   * Le but est etait de permettre à l'utilisateur de pouvoir acceder à une
   * route en mode maintenance, il faut ajouter :
   * options:
   * _maintenance_access: TRUE
   * //
   * Check available redirection.
   *
   * @param \Symfony\Component\HttpKernel\Event\GetResponseEvent $event
   *        Event object.
   */
  // public function checkForRedirection(GetResponseEvent $event) {
  // $allowed_path = array(
  // '/user',
  // '/user/login',
  // '/user/password'
  // );
  // $current_path = \Drupal::service('path.current')->getPath();
  // if (!in_array($current_path, $allowed_path)) {
  // $config = \Drupal::config('maintenance_mode_redirect.settings');
  // // If system maintenance mode and enabled URL redirect is enabled,
  // // redirect to a different domain.
  // $maintenance_enabled = \Drupal::state()->get('system.maintenance_mode');
  // $maintenance_url_redirect_enabled =
  // $config->get('maintenance_mode_redirect_active');

  // if ($maintenance_enabled === 1 && $maintenance_url_redirect_enabled &&
  // !\Drupal::currentUser()->hasPermission('access site in maintenance mode'))
  // {
  // $url_to_redirect = $config->get('maintenance_mode_redirect_url');
  // $event->setResponse(new TrustedRedirectResponse($url_to_redirect));
  // }
  // }
  // }

  /**
   * Set header 'Content-Security-Policy' to response to allow embedding in
   * iFrame.
   */
  public function setHeaderContentSecurityPolicy(ResponseEvent $event) {
    $response = $event->getResponse();
    // $response->headers->remove( 'X-Frame-Options' );
    // permet de bloquer les popups avec les liens externes.
    // $response->headers->set( 'Cross-Origin-Opener-Policy', "same-origin" );
    // $response->headers->set( 'Cross-Origin-Embedder-Policy', "require-corp"
    // );
    // ouvrir
    $response->headers->set('Cross-Origin-Opener-Policy', "same-origin-allow-popups");
    $response->headers->set('Cross-Origin-Embedder-Policy', "unsafe-none");
  }
}
