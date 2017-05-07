'use strict';
goog.provide('Blockly.Blocks.scontrol');

goog.require('Blockly.Blocks');

Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("Condicion")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IF");
    this.appendStatementInput("Cuerpo")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Then");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['switch'] = {
  init: function() {
    this.appendValueInput("Switch")
        .setCheck(null)
        .appendField("Switch");
    this.appendValueInput("Modo")
        .setCheck("Boolean");
    this.appendStatementInput("Cuerpo")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['loop'] = {
  init: function() {
    this.appendStatementInput("Cuerpo")
        .setCheck(null)
        .appendField("Loop")
        .appendField(new Blockly.FieldTextInput("id"), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['for'] = {
  init: function() {
    this.appendValueInput("Var")
        .setCheck(null)
        .appendField("For");
    this.appendValueInput("Cond")
        .setCheck(null);
    this.appendValueInput("Asignacion")
        .setCheck(null);
    this.appendStatementInput("Cuerpo")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['count'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Count");
    this.appendStatementInput("Cuerpo")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dowhilex'] = {
  init: function() {
    this.appendStatementInput("Cuerpo")
        .setCheck(null)
        .appendField("Do");
    this.appendValueInput("Condicion")
        .setCheck(null)
        .appendField("WhileX");
    this.appendValueInput("Condicion2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['repeatuntil'] = {
  init: function() {
    this.appendStatementInput("Cuerpo")
        .setCheck(null)
        .appendField("Repeat");
    this.appendValueInput("Condicion")
        .setCheck(null)
        .appendField("Until");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['dowhile'] = {
  init: function() {
    this.appendStatementInput("Cuerpo")
        .setCheck(null)
        .appendField("Do");
    this.appendValueInput("Condicion")
        .setCheck(null)
        .appendField("While");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("While");
    this.appendStatementInput("Cuerpo")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['else'] = {
  init: function() {
    this.appendStatementInput("Cuerpo")
        .setCheck(null)
        .appendField("Else");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['case'] = {
  init: function() {
    this.appendValueInput("Case")
        .setCheck(null)
        .appendField("Case:");
    this.appendStatementInput("Cuerpo")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['default'] = {
  init: function() {
    this.appendStatementInput("Defualt")
        .setCheck(null)
        .appendField("Default: ");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['rango'] = {
  init: function() {
    this.appendValueInput("Uno")
        .setCheck(null);
    this.appendValueInput("Dos")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Continue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['declaracion'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["Str","Str"], ["Num","Num"], ["Bool","Bool"]]), "tipo")
        .appendField(new Blockly.FieldTextInput("Variable"), "Var");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("ID_Variable"), "Var");
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","true"], ["False","false"]]), "True_False");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['logicos'] = {
  init: function() {
    this.appendValueInput("IZQ")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["&&","&&"], ["||","||"], ["|?","|?"],["&?","&?"],["|&","|&"]]), "Logico");
    this.appendValueInput("DER")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['operacion'] = {
  init: function() {
    this.appendValueInput("IZQ")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["/","/"], ["^","^"], ["%","%"]]), "OP");
    this.appendValueInput("DER")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['show'] = {
  init: function() {
    this.appendValueInput("Mostrar")
        .setCheck(null)
        .appendField("Show");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['unario'] = {
  init: function() {
    this.appendValueInput("Un")
        .setCheck(null)
        .appendField("-");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['relacionales'] = {
  init: function() {
    this.appendValueInput("IZQ")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["<=","<="], [">=",">="], ["==","=="], ["!=","!="]]), "rel");
    this.appendValueInput("DER")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['texto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Texto"), "Texto");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['getbool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getBool")
        .appendField(new Blockly.FieldTextInput("True"), "true");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['getnum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getNum")
        .appendField(new Blockly.FieldTextInput("0"), "Num")
        .appendField(new Blockly.FieldDropdown([["bin","bin"], ["hex","hex"], ["dec","dec"]]), "NAME");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};