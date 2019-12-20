+(function (window, webduino) {

  'use strict';

  window.getIRLed = function (board, encode) {
    return new webduino.module.IRLed(board, encode);
  };

}(window, window.webduino));
