+(function (global, factory) {
  if (typeof exports === 'undefined') {
    factory(global.webduino || {});
  } else {
    module.exports = factory;
  }
}(this, function (scope) {
  'use strict';

  var Module = scope.Module,
    proto;

  /**
   * The IRLed Class.
   *
   * IR LED (Infrared LED) is widely used for remote controls and night-vision cameras.
   * 
   * @namespace webduino.module
   * @class IRLed
   * @constructor
   * @param {webduino.Board} board The board that the IRLed is attached to.
   * @param {String} encode Encode which IRLed used.
   * @extends webduino.Module
   */
  function IRLed(board, encode) {
    Module.call(this);
    this._board = board;
    this._encode = encode;
    this._board.send([0xf4, 0x09, 0x03, 0xe9, 0x00, 0x00]);
  }

  IRLed.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: IRLed
    }
  });

  /**
   * Send IR code.
   *
   * @method send 
   * @param {String} code Hexadecimal String to send.
   */
  proto.send = function (code) {  
    var data = [0x09, 0x04, 32];
    code = code || this._encode;

    if(code){
      for(var i = 0; i < code.length; i++){
        data.push(code.charCodeAt(i));
      }
    } 
    this._board.sendSysex(0x04, data);
  };

  /**
   * Update code.
   *
   * @method updateEncode 
   * @param {String} code Hexadecimal to update.
   */
  proto.updateEncode = function (code) {
    this._encode = code;
  };

  scope.module.IRLed = IRLed;
}));