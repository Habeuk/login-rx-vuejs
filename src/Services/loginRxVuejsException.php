<?php

namespace Drupal\login_rx_vuejs\Services;

use LogicException;

class loginRxVuejsException extends LogicException {
  
  /**
   *
   * {@inheritdoc}
   * @see LogicException::__construct()
   */
  public function __construct($message = null, $code = 435, $previous = null) {
    // TODO Auto-generated method stub
    parent::__construct($message, $code, $previous);
    $this->logMessage();
  }
  
  private function logMessage() {
    \Drupal::logger('login_rx_vuejs')->warning($this->getMessage() . $this->toString($this->getTrace()[0]));
  }
  
  private function toString($message) {
    $stringMessage = '';
    foreach ($message as $key => $value) {
      if (is_array($value)) {
        $stringMessage .= $this->toString($value);
      }
      else {
        $stringMessage .= "<br> \n" . $key . ' : ' . $value;
      }
    }
    return $stringMessage;
  }
  
}