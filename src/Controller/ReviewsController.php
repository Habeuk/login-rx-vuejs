<?php

namespace Drupal\login_rx_vuejs\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\login_rx_vuejs\Services\loginRxVuejs as UserAuth;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ReviewsController extends ControllerBase
{
    protected $UserAuth;

    public function __construct(UserAuth $UserAuth)
    {
        $this->UserAuth = $UserAuth;
    }

    /**
     *
     * {@inheritdoc}
     */
    public static function create(ContainerInterface $container)
    {
        return new static($container->get('login_rx_vuejs.identification'));
    }


    /**
     * @inheritDoc
     */
    public function getReviews()
    {
        $config = [
            'client_secret' => "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",
            'client_id' => "444781509582-jr7oshjk4emur9mp9s0jqr34fum52g6b.apps.googleusercontent.com",
            "credentials" => [
                'client_secret' => "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",
                'client_id' => "444781509582-jr7oshjk4emur9mp9s0jqr34fum52g6b.apps.googleusercontent.com",
            ]
        ];
        $client = new \Google\Client();
        $client->setAuthConfig($config["credentials"]);
        $temp = $client->authorize();
        $response = $temp->get('https://mybusiness.googleapis.com/v4/accounts/3581375215066999039/locations/11241664012660759212/reviews');
        dd($response);
        return $temp;
    }
}
