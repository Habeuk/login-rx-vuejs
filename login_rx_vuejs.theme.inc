<?php

function template_preprocess_ogin_rx_vuejs(&$vars) {
  $vars['logo_current_theme'] = theme_get_setting('logo.url');
}