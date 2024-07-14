<?php

namespace Drupal\login_rx_vuejs\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an example block.
 *
 * @Block(
 *   id = "login_rx_vuejs_example",
 *   admin_label = @Translation("Example"),
 *   category = @Translation("Login rx vuejs")
 * )
 */
class ExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build['content'] = [
      '#markup' => $this->t('It works!'),
    ];
    return $build;
  }

}
