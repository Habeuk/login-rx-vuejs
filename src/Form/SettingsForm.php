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
    
    $config = $this->config('login_rx_vuejs.settings')->getRawData();
    /**
     * Si le module 'domain_access' est activée, on peut filtrer la connection
     * via le domaine.
     */
    if (\Drupal::moduleHandler()->moduleExists('domain') && \Drupal::moduleHandler()->moduleExists('domain_access')) {
      $form['load_user_by_access_domain'] = [
        '#type' => 'checkbox',
        '#title' => $this->t(" Activee la creation de compte par domaine "),
        '#description' => "Permet de connecter les utilisateurs sur un ou plusieurs domaines",
        '#default_value' => isset($config['load_user_by_access_domain']) ? $config['load_user_by_access_domain'] : false
      ];
    }
    $form['generate_user'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Generate the password'),
      '#description' => "Genere le mot de passe et envoit le à l'email fournit",
      '#default_value' => isset($config['generate_user']) ? $config['generate_user'] : false
    ];
    $form['environ_run'] = [
      '#type' => 'checkbox',
      '#title' => $this->t(' Use compressed files.( prod and dev)'),
      '#default_value' => isset($config['environ_run']) ? $config['environ_run'] : true
    ];
    //
    $form['send_mail'] = [
      '#type' => 'checkbox',
      '#title' => $this->t(" Send credentials to user "),
      '#default_value' => isset($config['send_mail']) ? $config['send_mail'] : false
    ]; //
    $form['client_google_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t(" Google client id "),
      '#default_value' => isset($config['client_google_id']) ? $config['client_google_id'] : ''
    ];
    $form['facebook_app_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t(" Facebook App Id"),
      '#default_value' => isset($config['facebook_app_id']) ? $config['facebook_app_id'] : ''
    ];
    //
    $form['add_roles'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t(' select roles '),
      '#description' => " Ces roles seront automatiquement ajouté lors de la creation de compte ",
      '#default_value' => !empty($config['add_roles']) ? $config['add_roles'] : [],
      '#options' => $options
    ];
    // action_after_login
    $form['action_after_login'] = [
      '#type' => 'radios',
      '#title' => $this->t(' Action after connection '),
      '#default_value' => !empty($config['action_after_login']) ? $config['action_after_login'] : '',
      '#options' => [
        'home' => $this->t(" Redirection on the home page "),
        "reload" => $this->t(" Reload the same page "),
        "redirect" => $this->t(" Redirection to a specific page (not yet developed at js level) ")
      ]
    ];
    $form['url_redirect'] = [
      '#type' => 'textfield',
      '#title' => $this->t(' Url to redirect after login '),
      '#default_value' => !empty($config['url_redirect']) ? $config['url_redirect'] : ''
    ];
    $form['texts'] = [
      '#type' => 'fieldset',
      '#title' => $this->t("text utilisé au niveau du front"),
      '#tree' => TRUE
    ];
    $form['texts']['log_email'] = [
      "#type" => 'textfield',
      '#title' => $this->t('login label'),
      '#default_value' => isset($config['texts']['log_email']) ? $config['texts']['log_email'] : "Email ou Nom d'utilisateur"
    ];
    $form['texts']['pass'] = [
      "#type" => 'textfield',
      '#title' => $this->t('password label'),
      '#default_value' => isset($config['texts']['pass']) ? $config['texts']['pass'] : 'Mot de passe'
    ];
    $form['texts']['login'] = [
      "#type" => 'textfield',
      '#title' => $this->t('login label (register)'),
      '#default_value' => isset($config['texts']['login']) ? $config['texts']['login'] : "Nom d'utilisateur"
    ];
    $form['texts']['mail'] = [
      "#type" => 'textfield',
      '#title' => 'Label email ou identifiant',
      '#default_value' => isset($config['texts']['mail']) ? $config['texts']['mail'] : "Label email ou identifiant"
    ];
    $form['texts']['submit'] = [
      '#type' => 'fieldset',
      '#title' => "textes pour les boutons",
      '#tree' => TRUE
    ];
    $form['texts']['submit']['first'] = [
      "#type" => 'textfield',
      '#title' => $this->t('next label'),
      '#default_value' => isset($config['texts']['submit']['first']) ? $config['texts']['submit']['first'] : "Suivant"
    ];
    $form['texts']['submit']['connect'] = [
      "#type" => 'textfield',
      '#title' => 'Label email ou identifiant',
      '#default_value' => isset($config['texts']['submit']['connect']) ? $config['texts']['submit']['connect'] : "Connexion"
    ];
    $form['texts']['submit']['register'] = [
      "#type" => 'textfield',
      '#title' => $this->t('Label register'),
      '#default_value' => isset($config['texts']['submit']['register']) ? $config['texts']['submit']['register'] : "S'inscrire"
    ];
    $form['texts']['submit']['final'] = [
      "#type" => 'textfield',
      '#title' => $this->t('Label completed'),
      '#default_value' => isset($config['texts']['submit']['final']) ? $config['texts']['submit']['final'] : "Terminée"
    ];
    $form['texts']['devis_create_user'] = [
      "#type" => 'text_format',
      '#title' => $this->t('text to display after account creation'),
      '#format' => !empty($config['texts']['devis_create_user']['format']) ? $config['texts']['devis_create_user']['format'] : 'full_html',
      '#default_value' => !empty($config['texts']['devis_create_user']['value']) ? $config['texts']['devis_create_user']['value'] : "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
    ];
    $form['texts']['condition_utilisation'] = [
      "#type" => 'text_format',
      '#title' => $this->t('Text condition of use'),
      '#format' => !empty($config['texts']['condition_utilisation']['format']) ? $config['texts']['condition_utilisation']['format'] : 'full_html',
      '#default_value' => !empty($config['texts']['condition_utilisation']['value']) ? $config['texts']['condition_utilisation']['value'] : '<p class="text-white"> En vous inscrivant, vous acceptez nos <a href="#"> Conditions d\'utilisation </a> , de recevoir des emails et des MAJ de Habeuk et vous reconnaissez avoir lu notre <a href="#"> Politique de confidentialité</a></p>'
    ];
    // $this->custom_function_name();
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
    $config->set('url_redirect', $form_state->getValue('url_redirect'));
    $config->set('action_after_login', $form_state->getValue('action_after_login'));
    $config->set('texts', $form_state->getValue('texts'));
    $config->set('client_google_id', trim($form_state->getValue('client_google_id')));
    $config->set('facebook_app_id', trim($form_state->getValue('facebook_app_id')));
    if (\Drupal::moduleHandler()->moduleExists('domain') && \Drupal::moduleHandler()->moduleExists('domain_access')) {
      $config->set('load_user_by_access_domain', $form_state->getValue('load_user_by_access_domain'));
    }
    else {
      $config->set('load_user_by_access_domain', false);
    }
    $config->save();
    parent::submitForm($form, $form_state);
  }
  
  /**
   * --
   */
  function custom_function_name() {
    $mailManager = \Drupal::service('plugin.manager.mail');
    $module = 'login_rx_vuejs';
    $key = 'login_rx_vuejs_send_mail'; // Replace with Your key
    $to = 'kksasteph888@gmail.com';
    $params['message'] = ' <h1> MAil </h1> <p> hummm test send mail</p> ';
    $params['subject'] = ' Send email ';
    $langcode = \Drupal::currentUser()->getPreferredLangcode();
    $send = true;
    $result = $mailManager->mail($module, $key, $to, $langcode, $params, NULL, $send);
    if ($result['result'] != true) {
      $message = t('There was a problem sending your email notification to @email.', array(
        '@email' => $to
      ));
      $this->messenger()->addError($message);
    }
    else {
      $message = t('An email notification has been sent to @email ', array(
        '@email' => $to
      ));
      $this->messenger()->addMessage($message);
    }
  }
  
}
