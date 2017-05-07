'use strict';
goog.provide('Blockly.Blocks.scontrol');

goog.require('Blockly.Blocks');
Blockly.JavaScript['if'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'Condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if ('+value_condicion+') then {\n'+statements_cuerpo+'\n}\n';
  return code;
};
Blockly.JavaScript['else'] = function(block) {
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Else{\n'+statements_cuerpo+'\n}\n';
  return code;
};

Blockly.JavaScript['switch'] = function(block) {
  var value_switch = Blockly.JavaScript.valueToCode(block, 'Switch', Blockly.JavaScript.ORDER_ATOMIC);
  var value_modo = Blockly.JavaScript.valueToCode(block, 'Modo', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Switch('+value_switch+', '+value_modo+'){\n'+statements_cuerpo+'\n}\n';
  return code;
};
Blockly.JavaScript['while'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'While('+value_name+'){\n'+statements_cuerpo+'\n}\n';
  return code;
};
Blockly.JavaScript['dowhile'] = function(block) {
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'Condicion', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Do{\n'+statements_cuerpo+'\n} While('+value_condicion+')\n';
  return code;
};
Blockly.JavaScript['repeatuntil'] = function(block) {
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'Condicion', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Repeat{\n'+statements_cuerpo+'\n} Until('+value_condicion+')\n';
  return code;
};
Blockly.JavaScript['for'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'Var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cond = Blockly.JavaScript.valueToCode(block, 'Cond', Blockly.JavaScript.ORDER_ATOMIC);
  var value_asignacion = Blockly.JavaScript.valueToCode(block, 'Asignacion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for('+value_var+';'+value_cond+';'+value_asignacion+'){\n'+statements_cuerpo+"\n}\n";
  return code;
};
Blockly.JavaScript['loop'] = function(block) {
  var text_id = block.getFieldValue('ID');
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
   var code = 'Loop '+text_id+' {\n'+statements_cuerpo+'\n}\n';
  return code;
};
Blockly.JavaScript['count'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  // TODO: Assemble JavaScript into code variable.
 var code = 'Count ('+value_variable+') {\n'+statements_cuerpo+'\n}\n';
  return code;
};
Blockly.JavaScript['dowhilex'] = function(block) {
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'Cuerpo');
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'Condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var value_condicion2 = Blockly.JavaScript.valueToCode(block, 'Condicion2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code = 'Do{\n'+statements_cuerpo+'\n} WhileX('+value_condicion+', '+value_condicion2+')\n';
  return code;
};
Blockly.JavaScript['declaracion'] = function(block) {
  var dropdown_tipo = block.getFieldValue('tipo');
  var text_var = block.getFieldValue('Var');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 var code="";
  if(value_name.length>0)
   {code= dropdown_tipo+' '+text_var+': '+value_name+';\n';}
  else{
  	code= dropdown_tipo+' '+text_var+';\n'
  }
  return code;
};
Blockly.JavaScript['variable'] = function(block) {
  var text_var = block.getFieldValue('Var');
  // TODO: Assemble JavaScript into code variable.
  var code = text_var;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['boolean'] = function(block) {
  var dropdown_true_false = block.getFieldValue('True_False');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_true_false;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['logicos'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'IZQ', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_logico = block.getFieldValue('Logico');
  var value_der = Blockly.JavaScript.valueToCode(block, 'DER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_izq +' '+ dropdown_logico +' '+value_der;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['operacion'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'IZQ', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('OP');
  var value_der = Blockly.JavaScript.valueToCode(block, 'DER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_izq+ ' ' + dropdown_op +' '+value_der ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['show'] = function(block) {
  var value_mostrar = Blockly.JavaScript.valueToCode(block, 'Mostrar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Show('+value_mostrar+');\n';
  return code;
};
Blockly.JavaScript['unario'] = function(block) {
  var value_un = Blockly.JavaScript.valueToCode(block, 'Un', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '- ('+value_un+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['relacionales'] = function(block) {
  var value_izq = Blockly.JavaScript.valueToCode(block, 'IZQ', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_rel = block.getFieldValue('rel');
  var value_der = Blockly.JavaScript.valueToCode(block, 'DER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_izq+' '+dropdown_rel+' '+value_der;
  return code;
};
Blockly.JavaScript['texto'] = function(block) {
  var text_texto = block.getFieldValue('Texto');
  // TODO: Assemble JavaScript into code variable.
  var code = '"'+text_texto+'"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['getbool'] = function(block) {
  var text_true = block.getFieldValue('true');
  // TODO: Assemble JavaScript into code variable.
  var code = 'getBool('+text_true+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['getnum'] = function(block) {
  var text_num = block.getFieldValue('Num');
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='getNum('+text_num+',"'+dropdown_name+'",'+value_name+')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};