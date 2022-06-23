<?php

namespace Drupal\login_rx_vuejs\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Entity\Role;
use Drupal\user\RoleInterface;

/**
 * Configure Login rx vuejs settings for this site.
 */
class SettingsForm extends ConfigFormBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'login_rx_vuejs_settings';
  }
  
  /**
   *
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'login_rx_vuejs.settings'
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $roles = Role::loadMultiple();
    $options = [];
    foreach ($roles as $k => $role) {
      /**
       * Role $role
       */
      if (!in_array($k, [
        RoleInterface::AUTHENTICATED_ID,
        RoleInterface::ANONYMOUS_ID
      ]))
        $options[$k] = $role->label();
    }
    
    $config = $this->config('login_rx_vuejs.settings');
    $form['generate_user'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Genere le mot de passe '),
      '#description' => "Genere le mot de passe et envoit le à l'email fournit",
      '#default_value' => $config->get('generate_user')
    ];
    $form['environ_run'] = [
      '#type' => 'checkbox',
      '#title' => $this->t(' Utiliser les fichiers compresses. '),
      '#default_value' => $config->get('environ_run')
    ];
    $form['add_roles'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t(' select roles '),
      '#description' => " Ces roles seront automatiquement ajouté lors de la creation de compte ",
      '#default_value' => !empty($config->get('add_roles')) ? $config->get('add_roles') : [],
      '#options' => $options
    ];
    return parent::buildForm($form, $form_state);
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('login_rx_vuejs.settings');
    $config->set('generate_user', $form_state->getValue('generate_user'));
    $config->set('environ_run', $form_state->getValue('environ_run'));
    $config->set('add_roles', $form_state->getValue('add_roles'));
    $config->save();
    parent::submitForm($form, $form_state);
  }
  
}
