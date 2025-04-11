Blockly.Blocks['irled_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_IRLED, "紅外線發射，腳位：")
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://resource.webduino.io/docs/cloud-component/component-io/ir#irled');
  }
};

Blockly.Blocks['irled_launch'] = {
  init: function () {
    this.appendValueInput("code_")
      .setCheck("String")
      .appendField(new Blockly.FieldVariable("irled"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRLED_LAUNCHCODE, "發射代碼 ( 十六進位 )：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://resource.webduino.io/docs/cloud-component/component-io/ir#irled');
  }
};
