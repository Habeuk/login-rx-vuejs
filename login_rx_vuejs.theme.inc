<?php

function template_preprocess_login_rx_vuejs(&$vars) {
  $vars['logo_current_theme'] = theme_get_setting('logo.url');
  if (!empty($vars['element']['#config']))
    $vars['config'] = $vars['element']['#config'];
}