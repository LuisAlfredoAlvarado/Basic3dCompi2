/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Funciones_3d = new Array()
var parser3d = (function(){
var parser = {trace: function trace(){},
yy: {},
symbols_: {"error":2,"raiz":3,"lista_metodos":4,"EOF":5,"metodo":6,"void":7,"ID":8,"(":9,")":10,"{":11,"Cuerpo_Metodo":12,"}":13,"Funciones_Propias":14,"Accion":15,"Expresion_Aritmetica":16,"Salto":17,"Salto_Condicional":18,"Asignacion_Pilas":19,"Etiquetas":20,":":21,"Exits":22,"Limpiar":23,"LLamada_Metodo":24,"Print":25,"printf":26,"valores_Print":27,",":28,"Valor":29,";":30,"%c":31,"%f":32,"%d":33,"$$_show":34,"$$_getRandom":35,"$$_getNum":36,"$$_getBool":37,"$$_inStr":38,"$$_inNum":39,"$$_outStr":40,"$$_outNum":41,"$$_getStrLength":42,"$$_Mayor":43,"$$_Menor":44,"$$_Igual":45,"$$_NumAStr":46,"$$_BoolaStr":47,"$$_SGB":48,"exit":49,"NUMBER":50,"Etiqueta":51,"Pila":52,"[":53,"]":54,"=":55,"Stack":56,"Heap":57,"Pool":58,"Asignados":59,"Operacion":60,"Temporal":61,"P":62,"S":63,"H":64,"+":65,"-":66,"*":67,"/":68,"^":69,"%":70,"goto":71,"if":72,"Relacional":73,"<":74,">":75,"<=":76,">=":77,"==":78,"!=":79,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"void",8:"ID",9:"(",10:")",11:"{",13:"}",21:":",26:"printf",28:",",30:";",31:"%c",32:"%f",33:"%d",34:"$$_show",35:"$$_getRandom",36:"$$_getNum",37:"$$_getBool",38:"$$_inStr",39:"$$_inNum",40:"$$_outStr",41:"$$_outNum",42:"$$_getStrLength",43:"$$_Mayor",44:"$$_Menor",45:"$$_Igual",46:"$$_NumAStr",47:"$$_BoolaStr",48:"$$_SGB",49:"exit",50:"NUMBER",51:"Etiqueta",53:"[",54:"]",55:"=",56:"Stack",57:"Heap",58:"Pool",61:"Temporal",62:"P",63:"S",64:"H",65:"+",66:"-",67:"*",68:"/",69:"^",70:"%",71:"goto",72:"if",74:"<",75:">",76:"<=",77:">=",78:"==",79:"!="},
productions_: [0,[3,2],[4,2],[4,1],[6,7],[6,7],[12,2],[12,1],[15,1],[15,1],[15,1],[15,1],[15,2],[15,1],[15,1],[15,1],[15,1],[25,7],[27,1],[27,1],[27,1],[24,4],[24,4],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[14,1],[23,7],[22,5],[20,3],[20,1],[19,7],[52,1],[52,1],[52,1],[16,6],[16,7],[16,4],[59,1],[59,1],[59,1],[59,1],[29,1],[29,1],[29,1],[29,1],[29,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[17,3],[18,9],[73,1],[73,1],[73,1],[73,1],[73,1],[73,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
/*``*/) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2:Funciones_3d.push($$[$0])
break;
case 3:Funciones_3d.push($$[$0])
break;
case 4: 
    this.$=new Funcion($$[$0-5],$$[$0-6])
    this.$.Cuerpo=$$[$0-1];
    
break;
case 5:
    this.$=new Funcion($$[$0-5],$$[$0-6])
    this.$.Cuerpo=$$[$0-1];
    
break;
case 6:
    var acc=new Nodo('Accion','',yylineno,yyleng)
    acc.Hijo($$[$0])
    this.$=new Nodo('Lista_Accion','',yylineno,yyleng)
    this.$.Hijo($$[$0-1]);
    this.$.Hijo(acc);
    
break;
case 7:this.$=new Nodo('Accion','',yylineno,yyleng)
    this.$.Hijo($$[$0])
break;
case 8:this.$=$$[$0];
break;
case 9:this.$=$$[$0];
break;
case 10:this.$=$$[$0];
break;
case 11:this.$=$$[$0];
break;
case 12:this.$=$$[$0-1];
break;
case 13:this.$=$$[$0];
break;
case 14:this.$=$$[$0];
break;
case 15:this.$=$$[$0];
break;
case 16:this.$=$$[$0];
break;
case 17:
    this.$=new Nodo('printf',$$[$0-4],yylineno,yyleng);
    this.$.Hijo($$[$0-2]);
    
break;
case 18:this.$=yytext
break;
case 19:this.$=yytext
break;
case 20:this.$=yytext
break;
case 21:
    this.$= new Nodo('Metodo',$$[$0-3],yylineno,yyleng)
    
break;
case 22:
         this.$= new Nodo('Metodo',$$[$0-3],yylineno,yyleng)
    
break;
case 23:this.$=yytext
break;
case 24:this.$=yytext
break;
case 25:this.$=yytext
break;
case 26:this.$=yytext
break;
case 27:this.$=yytext
break;
case 28:this.$=yytext
break;
case 29:this.$=yytext
break;
case 30:this.$=yytext
break;
case 31:this.$=yytext
break;
case 32:this.$=yytext
break;
case 33:this.$=yytext
break;
case 34:this.$=yytext
break;
case 35:this.$=yytext
break;
case 36:this.$=yytext
break;
case 37:this.$=new Nodo('$$_SGB','',yylineno,yyleng);
    this.$.Hijo($$[$0-4]);
    this.$.Hijo($$[$0-2]);
    
break;
case 38:
    this.$=new Nodo('exit','',yylineno,yyleng);
    this.$.Hijo(new Nodo('cod',$$[$0-2],yylineno,yyleng));
    
break;
case 39:
    this.$=$$[$0-2];
    this.$.Hijo(new Nodo('Etiqueta',$$[$0],yylineno,yyleng));
    
break;
case 40:this.$=new Nodo('Etiquetas','',yylineno,yyleng)
    this.$.Hijo(new Nodo('Etiqueta',$$[$0],yylineno,yyleng));
break;
case 41:
    this.$= new  Nodo('Asignacion_Pila','')
    var valor=new Nodo('valor','',yylineno,yyleng);
    valor.Hijo(new Nodo('Pila',$$[$0-6],yylineno,yyleng));
    valor.Hijo($$[$0-4]);
    this.$.Hijo(valor)
    this.$.Hijo($$[$0-1])

break;
case 42:this.$='Stack'
break;
case 43:this.$='Heap'
break;
case 44:this.$='Pool'
break;
case 45:
    this.$= new  Nodo('Asignacion','')
    this.$.Hijo($$[$0-5])
    var valor=new Nodo('valor','',yylineno,yyleng);
    valor.Hijo($$[$0-3]);
    valor.Hijo(new Nodo('Op',$$[$0-2],yylineno,yyleng));
    valor.Hijo($$[$0-1]);
    this.$.Hijo(valor)
    
break;
case 46:
    this.$= new  Nodo('Asignacion','',yylineno,yyleng)
    this.$.Hijo($$[$0-6])
    var valor=new Nodo('valor','',yylineno,yyleng);
    valor.Hijo(new Nodo('Pila',$$[$0-4],yylineno,yyleng));
    valor.Hijo($$[$0-2]);
    this.$.Hijo(valor)
    
break;
case 47:this.$= new  Nodo('Asignacion','')
    this.$.Hijo($$[$0-3])
    this.$.Hijo($$[$0-1])
    
break;
case 48:this.$=new Nodo('temporal',yytext,yylineno,yyleng)
break;
case 49:this.$=new Nodo('P',yytext,yylineno,yyleng)
break;
case 50:this.$=new Nodo('S',yytext,yylineno,yyleng)
break;
case 51:this.$=new Nodo('H',yytext,yylineno,yyleng)
break;
case 52:this.$=new Nodo('temporal',yytext,yylineno,yyleng)
break;
case 53:this.$=new Nodo('num',yytext,yylineno,yyleng)
break;
case 54:this.$=new Nodo('P',yytext,yylineno,yyleng)
break;
case 55:this.$=new Nodo('H',yytext,yylineno,yyleng)
break;
case 56:this.$=new Nodo('S',yytext,yylineno,yyleng)
break;
case 57:this.$='+'
break;
case 58:this.$='-'
break;
case 59:this.$='*'
break;
case 60:this.$='/'
break;
case 61:this.$='^'
break;
case 62:this.$='%'
break;
case 63:this.$=new Nodo('Salto',$$[$0-1],yylineno,yyleng)
break;
case 64:
    this.$=new Nodo('Salto_Cond',$$[$0-7],yylineno,yyleng);
    var cond = new Nodo('Condicion','',yylineno,yyleng);
    cond.Hijo($$[$0-6]);
    cond.Hijo(new Nodo('OP',$$[$0-5],yylineno,yyleng));
    cond.Hijo($$[$0-4]);
    this.$.Hijo(cond);
    this.$.Hijo(new Nodo('Salto',$$[$0-1],yylineno,yyleng));
    
break;
case 65:this.$='<'
break;
case 66:this.$='>'
break;
case 67:this.$='<='
break;
case 68:this.$='>='
break;
case 69:this.$='=='
break;
case 70:this.$='!='
break;
}
},
table: [{3:1,4:2,6:3,7:[1,4]},{1:[3]},{5:[1,5],6:6,7:[1,4]},{5:[2,3],7:[2,3]},{8:[1,7],14:8,34:[1,9],35:[1,10],36:[1,11],37:[1,12],38:[1,13],39:[1,14],40:[1,15],41:[1,16],42:[1,17],43:[1,18],44:[1,19],45:[1,20],46:[1,21],47:[1,22]},{1:[2,1]},{5:[2,2],7:[2,2]},{9:[1,23]},{9:[1,24]},{9:[2,23]},{9:[2,24]},{9:[2,25]},{9:[2,26]},{9:[2,27]},{9:[2,28]},{9:[2,29]},{9:[2,30]},{9:[2,31]},{9:[2,32]},{9:[2,33]},{9:[2,34]},{9:[2,35]},{9:[2,36]},{10:[1,25]},{10:[1,26]},{11:[1,27]},{11:[1,28]},{8:[1,47],12:29,14:48,15:30,16:31,17:32,18:33,19:34,20:35,22:36,23:37,24:38,25:39,26:[1,49],34:[1,9],35:[1,10],36:[1,11],37:[1,12],38:[1,13],39:[1,14],40:[1,15],41:[1,16],42:[1,17],43:[1,18],44:[1,19],45:[1,20],46:[1,21],47:[1,22],48:[1,46],49:[1,45],51:[1,44],52:43,56:[1,54],57:[1,55],58:[1,56],59:40,61:[1,50],62:[1,51],63:[1,52],64:[1,53],71:[1,41],72:[1,42]},{8:[1,47],12:57,14:48,15:30,16:31,17:32,18:33,19:34,20:35,22:36,23:37,24:38,25:39,26:[1,49],34:[1,9],35:[1,10],36:[1,11],37:[1,12],38:[1,13],39:[1,14],40:[1,15],41:[1,16],42:[1,17],43:[1,18],44:[1,19],45:[1,20],46:[1,21],47:[1,22],48:[1,46],49:[1,45],51:[1,44],52:43,56:[1,54],57:[1,55],58:[1,56],59:40,61:[1,50],62:[1,51],63:[1,52],64:[1,53],71:[1,41],72:[1,42]},{8:[1,47],13:[1,58],14:48,15:59,16:31,17:32,18:33,19:34,20:35,22:36,23:37,24:38,25:39,26:[1,49],34:[1,9],35:[1,10],36:[1,11],37:[1,12],38:[1,13],39:[1,14],40:[1,15],41:[1,16],42:[1,17],43:[1,18],44:[1,19],45:[1,20],46:[1,21],47:[1,22],48:[1,46],49:[1,45],51:[1,44],52:43,56:[1,54],57:[1,55],58:[1,56],59:40,61:[1,50],62:[1,51],63:[1,52],64:[1,53],71:[1,41],72:[1,42]},{8:[2,7],13:[2,7],26:[2,7],34:[2,7],35:[2,7],36:[2,7],37:[2,7],38:[2,7],39:[2,7],40:[2,7],41:[2,7],42:[2,7],43:[2,7],44:[2,7],45:[2,7],46:[2,7],47:[2,7],48:[2,7],49:[2,7],51:[2,7],56:[2,7],57:[2,7],58:[2,7],61:[2,7],62:[2,7],63:[2,7],64:[2,7],71:[2,7],72:[2,7]},{8:[2,8],13:[2,8],26:[2,8],34:[2,8],35:[2,8],36:[2,8],37:[2,8],38:[2,8],39:[2,8],40:[2,8],41:[2,8],42:[2,8],43:[2,8],44:[2,8],45:[2,8],46:[2,8],47:[2,8],48:[2,8],49:[2,8],51:[2,8],56:[2,8],57:[2,8],58:[2,8],61:[2,8],62:[2,8],63:[2,8],64:[2,8],71:[2,8],72:[2,8]},{8:[2,9],13:[2,9],26:[2,9],34:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9],40:[2,9],41:[2,9],42:[2,9],43:[2,9],44:[2,9],45:[2,9],46:[2,9],47:[2,9],48:[2,9],49:[2,9],51:[2,9],56:[2,9],57:[2,9],58:[2,9],61:[2,9],62:[2,9],63:[2,9],64:[2,9],71:[2,9],72:[2,9]},{8:[2,10],13:[2,10],26:[2,10],34:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10],39:[2,10],40:[2,10],41:[2,10],42:[2,10],43:[2,10],44:[2,10],45:[2,10],46:[2,10],47:[2,10],48:[2,10],49:[2,10],51:[2,10],56:[2,10],57:[2,10],58:[2,10],61:[2,10],62:[2,10],63:[2,10],64:[2,10],71:[2,10],72:[2,10]},{8:[2,11],13:[2,11],26:[2,11],34:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11],39:[2,11],40:[2,11],41:[2,11],42:[2,11],43:[2,11],44:[2,11],45:[2,11],46:[2,11],47:[2,11],48:[2,11],49:[2,11],51:[2,11],56:[2,11],57:[2,11],58:[2,11],61:[2,11],62:[2,11],63:[2,11],64:[2,11],71:[2,11],72:[2,11]},{21:[1,60],28:[1,61]},{8:[2,13],13:[2,13],26:[2,13],34:[2,13],35:[2,13],36:[2,13],37:[2,13],38:[2,13],39:[2,13],40:[2,13],41:[2,13],42:[2,13],43:[2,13],44:[2,13],45:[2,13],46:[2,13],47:[2,13],48:[2,13],49:[2,13],51:[2,13],56:[2,13],57:[2,13],58:[2,13],61:[2,13],62:[2,13],63:[2,13],64:[2,13],71:[2,13],72:[2,13]},{8:[2,14],13:[2,14],26:[2,14],34:[2,14],35:[2,14],36:[2,14],37:[2,14],38:[2,14],39:[2,14],40:[2,14],41:[2,14],42:[2,14],43:[2,14],44:[2,14],45:[2,14],46:[2,14],47:[2,14],48:[2,14],49:[2,14],51:[2,14],56:[2,14],57:[2,14],58:[2,14],61:[2,14],62:[2,14],63:[2,14],64:[2,14],71:[2,14],72:[2,14]},{8:[2,15],13:[2,15],26:[2,15],34:[2,15],35:[2,15],36:[2,15],37:[2,15],38:[2,15],39:[2,15],40:[2,15],41:[2,15],42:[2,15],43:[2,15],44:[2,15],45:[2,15],46:[2,15],47:[2,15],48:[2,15],49:[2,15],51:[2,15],56:[2,15],57:[2,15],58:[2,15],61:[2,15],62:[2,15],63:[2,15],64:[2,15],71:[2,15],72:[2,15]},{8:[2,16],13:[2,16],26:[2,16],34:[2,16],35:[2,16],36:[2,16],37:[2,16],38:[2,16],39:[2,16],40:[2,16],41:[2,16],42:[2,16],43:[2,16],44:[2,16],45:[2,16],46:[2,16],47:[2,16],48:[2,16],49:[2,16],51:[2,16],56:[2,16],57:[2,16],58:[2,16],61:[2,16],62:[2,16],63:[2,16],64:[2,16],71:[2,16],72:[2,16]},{55:[1,62]},{51:[1,63]},{9:[1,64]},{53:[1,65]},{21:[2,40],28:[2,40]},{9:[1,66]},{9:[1,67]},{9:[1,68]},{9:[1,69]},{9:[1,70]},{55:[2,48]},{55:[2,49]},{55:[2,50]},{55:[2,51]},{53:[2,42]},{53:[2,43]},{53:[2,44]},{8:[1,47],13:[1,71],14:48,15:59,16:31,17:32,18:33,19:34,20:35,22:36,23:37,24:38,25:39,26:[1,49],34:[1,9],35:[1,10],36:[1,11],37:[1,12],38:[1,13],39:[1,14],40:[1,15],41:[1,16],42:[1,17],43:[1,18],44:[1,19],45:[1,20],46:[1,21],47:[1,22],48:[1,46],49:[1,45],51:[1,44],52:43,56:[1,54],57:[1,55],58:[1,56],59:40,61:[1,50],62:[1,51],63:[1,52],64:[1,53],71:[1,41],72:[1,42]},{5:[2,4],7:[2,4]},{8:[2,6],13:[2,6],26:[2,6],34:[2,6],35:[2,6],36:[2,6],37:[2,6],38:[2,6],39:[2,6],40:[2,6],41:[2,6],42:[2,6],43:[2,6],44:[2,6],45:[2,6],46:[2,6],47:[2,6],48:[2,6],49:[2,6],51:[2,6],56:[2,6],57:[2,6],58:[2,6],61:[2,6],62:[2,6],63:[2,6],64:[2,6],71:[2,6],72:[2,6]},{8:[2,12],13:[2,12],26:[2,12],34:[2,12],35:[2,12],36:[2,12],37:[2,12],38:[2,12],39:[2,12],40:[2,12],41:[2,12],42:[2,12],43:[2,12],44:[2,12],45:[2,12],46:[2,12],47:[2,12],48:[2,12],49:[2,12],51:[2,12],56:[2,12],57:[2,12],58:[2,12],61:[2,12],62:[2,12],63:[2,12],64:[2,12],71:[2,12],72:[2,12]},{51:[1,72]},{29:73,50:[1,76],52:74,56:[1,54],57:[1,55],58:[1,56],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{30:[1,80]},{29:81,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{29:82,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{50:[1,83]},{29:84,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{10:[1,85]},{10:[1,86]},{27:87,31:[1,88],32:[1,89],33:[1,90]},{5:[2,5],7:[2,5]},{21:[2,39],28:[2,39]},{30:[1,92],60:91,65:[1,93],66:[1,94],67:[1,95],68:[1,96],69:[1,97],70:[1,98]},{53:[1,99]},{10:[2,52],28:[2,52],30:[2,52],54:[2,52],65:[2,52],66:[2,52],67:[2,52],68:[2,52],69:[2,52],70:[2,52],74:[2,52],75:[2,52],76:[2,52],77:[2,52],78:[2,52],79:[2,52]},{10:[2,53],28:[2,53],30:[2,53],54:[2,53],65:[2,53],66:[2,53],67:[2,53],68:[2,53],69:[2,53],70:[2,53],74:[2,53],75:[2,53],76:[2,53],77:[2,53],78:[2,53],79:[2,53]},{10:[2,54],28:[2,54],30:[2,54],54:[2,54],65:[2,54],66:[2,54],67:[2,54],68:[2,54],69:[2,54],70:[2,54],74:[2,54],75:[2,54],76:[2,54],77:[2,54],78:[2,54],79:[2,54]},{10:[2,55],28:[2,55],30:[2,55],54:[2,55],65:[2,55],66:[2,55],67:[2,55],68:[2,55],69:[2,55],70:[2,55],74:[2,55],75:[2,55],76:[2,55],77:[2,55],78:[2,55],79:[2,55]},{10:[2,56],28:[2,56],30:[2,56],54:[2,56],65:[2,56],66:[2,56],67:[2,56],68:[2,56],69:[2,56],70:[2,56],74:[2,56],75:[2,56],76:[2,56],77:[2,56],78:[2,56],79:[2,56]},{8:[2,63],13:[2,63],26:[2,63],34:[2,63],35:[2,63],36:[2,63],37:[2,63],38:[2,63],39:[2,63],40:[2,63],41:[2,63],42:[2,63],43:[2,63],44:[2,63],45:[2,63],46:[2,63],47:[2,63],48:[2,63],49:[2,63],51:[2,63],56:[2,63],57:[2,63],58:[2,63],61:[2,63],62:[2,63],63:[2,63],64:[2,63],71:[2,63],72:[2,63]},{73:100,74:[1,101],75:[1,102],76:[1,103],77:[1,104],78:[1,105],79:[1,106]},{54:[1,107]},{10:[1,108]},{28:[1,109]},{30:[1,110]},{30:[1,111]},{28:[1,112]},{28:[2,18]},{28:[2,19]},{28:[2,20]},{29:113,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{8:[2,47],13:[2,47],26:[2,47],34:[2,47],35:[2,47],36:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47],48:[2,47],49:[2,47],51:[2,47],56:[2,47],57:[2,47],58:[2,47],61:[2,47],62:[2,47],63:[2,47],64:[2,47],71:[2,47],72:[2,47]},{50:[2,57],61:[2,57],62:[2,57],63:[2,57],64:[2,57]},{50:[2,58],61:[2,58],62:[2,58],63:[2,58],64:[2,58]},{50:[2,59],61:[2,59],62:[2,59],63:[2,59],64:[2,59]},{50:[2,60],61:[2,60],62:[2,60],63:[2,60],64:[2,60]},{50:[2,61],61:[2,61],62:[2,61],63:[2,61],64:[2,61]},{50:[2,62],61:[2,62],62:[2,62],63:[2,62],64:[2,62]},{29:114,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{29:115,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{50:[2,65],61:[2,65],62:[2,65],63:[2,65],64:[2,65]},{50:[2,66],61:[2,66],62:[2,66],63:[2,66],64:[2,66]},{50:[2,67],61:[2,67],62:[2,67],63:[2,67],64:[2,67]},{50:[2,68],61:[2,68],62:[2,68],63:[2,68],64:[2,68]},{50:[2,69],61:[2,69],62:[2,69],63:[2,69],64:[2,69]},{50:[2,70],61:[2,70],62:[2,70],63:[2,70],64:[2,70]},{55:[1,116]},{30:[1,117]},{29:118,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{8:[2,21],13:[2,21],26:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21],42:[2,21],43:[2,21],44:[2,21],45:[2,21],46:[2,21],47:[2,21],48:[2,21],49:[2,21],51:[2,21],56:[2,21],57:[2,21],58:[2,21],61:[2,21],62:[2,21],63:[2,21],64:[2,21],71:[2,21],72:[2,21]},{8:[2,22],13:[2,22],26:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],42:[2,22],43:[2,22],44:[2,22],45:[2,22],46:[2,22],47:[2,22],48:[2,22],49:[2,22],51:[2,22],56:[2,22],57:[2,22],58:[2,22],61:[2,22],62:[2,22],63:[2,22],64:[2,22],71:[2,22],72:[2,22]},{29:119,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{30:[1,120]},{54:[1,121]},{10:[1,122]},{29:123,50:[1,76],61:[1,75],62:[1,77],63:[1,79],64:[1,78]},{8:[2,38],13:[2,38],26:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[2,38],43:[2,38],44:[2,38],45:[2,38],46:[2,38],47:[2,38],48:[2,38],49:[2,38],51:[2,38],56:[2,38],57:[2,38],58:[2,38],61:[2,38],62:[2,38],63:[2,38],64:[2,38],71:[2,38],72:[2,38]},{10:[1,124]},{10:[1,125]},{8:[2,45],13:[2,45],26:[2,45],34:[2,45],35:[2,45],36:[2,45],37:[2,45],38:[2,45],39:[2,45],40:[2,45],41:[2,45],42:[2,45],43:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45],49:[2,45],51:[2,45],56:[2,45],57:[2,45],58:[2,45],61:[2,45],62:[2,45],63:[2,45],64:[2,45],71:[2,45],72:[2,45]},{30:[1,126]},{71:[1,127]},{30:[1,128]},{30:[1,129]},{30:[1,130]},{8:[2,46],13:[2,46],26:[2,46],34:[2,46],35:[2,46],36:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46],49:[2,46],51:[2,46],56:[2,46],57:[2,46],58:[2,46],61:[2,46],62:[2,46],63:[2,46],64:[2,46],71:[2,46],72:[2,46]},{51:[1,131]},{8:[2,41],13:[2,41],26:[2,41],34:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41],46:[2,41],47:[2,41],48:[2,41],49:[2,41],51:[2,41],56:[2,41],57:[2,41],58:[2,41],61:[2,41],62:[2,41],63:[2,41],64:[2,41],71:[2,41],72:[2,41]},{8:[2,37],13:[2,37],26:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],47:[2,37],48:[2,37],49:[2,37],51:[2,37],56:[2,37],57:[2,37],58:[2,37],61:[2,37],62:[2,37],63:[2,37],64:[2,37],71:[2,37],72:[2,37]},{8:[2,17],13:[2,17],26:[2,17],34:[2,17],35:[2,17],36:[2,17],37:[2,17],38:[2,17],39:[2,17],40:[2,17],41:[2,17],42:[2,17],43:[2,17],44:[2,17],45:[2,17],46:[2,17],47:[2,17],48:[2,17],49:[2,17],51:[2,17],56:[2,17],57:[2,17],58:[2,17],61:[2,17],62:[2,17],63:[2,17],64:[2,17],71:[2,17],72:[2,17]},{30:[1,132]},{8:[2,64],13:[2,64],26:[2,64],34:[2,64],35:[2,64],36:[2,64],37:[2,64],38:[2,64],39:[2,64],40:[2,64],41:[2,64],42:[2,64],43:[2,64],44:[2,64],45:[2,64],46:[2,64],47:[2,64],48:[2,64],49:[2,64],51:[2,64],56:[2,64],57:[2,64],58:[2,64],61:[2,64],62:[2,64],63:[2,64],64:[2,64],71:[2,64],72:[2,64]}],
defaultActions: {5:[2,1],9:[2,23],10:[2,24],11:[2,25],12:[2,26],13:[2,27],14:[2,28],15:[2,29],16:[2,30],17:[2,31],18:[2,32],19:[2,33],20:[2,34],21:[2,35],22:[2,36],50:[2,48],51:[2,49],52:[2,50],53:[2,51],54:[2,42],55:[2,43],56:[2,44],88:[2,18],89:[2,19],90:[2,20]},
parseError: function parseError(str,hash){if(hash.recoverable){this.trace(str)}else{throw new Error(str)}},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash)}else{throw new Error(str)}},

// resets the lexer, sets new input
setInput:function (input){this._input=input;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0;return this},

// consumes and returns one char from the input
input:function (){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1);return ch},

// unshifts one char (or a string) into the input
unput:function (ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1){this.yylineno-=lines.length-1}var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]}this.yyleng=this.yytext.length;return this},

// When called from action, caches matched text and appends it on next action
more:function (){this._more=true;return this},

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function (){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},

// retain first n characters of the match
less:function (n){this.unput(this.match.slice(n))},

// displays already matched input, i.e. for error messages
pastInput:function (){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},

// displays upcoming input, i.e. for error messages
upcomingInput:function (){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length)}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function (){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer){backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){backup.yylloc.range=this.yylloc.range.slice(0)}}lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno+=lines.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input){this.done=false}if(token){return token}else if(this._backtrack){for(var k in backup){this[k]=backup[k]}return false}return false},

// return next match in input
next:function (){if(this.done){return this.EOF}if(!this._input){this.done=true}var token,match,tempMatch,index;if(!this._more){this.yytext="";this.match=""}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(this.options.backtrack_lexer){token=this.test_match(tempMatch,rules[i]);if(token!==false){return token}else if(this._backtrack){match=false;continue}else{return false}}else if(!this.options.flex){break}}}if(match){token=this.test_match(match,rules[index]);if(token!==false){return token}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},

// return next match that has a token
lex:function lex(){var r=this.next();if(r){return r}else{return this.lex()}},

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition){this.conditionStack.push(condition)},

// pop the previously active lexer condition state off the condition stack
popState:function popState(){var n=this.conditionStack.length-1;if(n>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n){n=this.conditionStack.length-1-Math.abs(n||0);if(n>=0){return this.conditionStack[n]}else{return"INITIAL"}},

// alias for begin(condition)
pushState:function pushState(condition){this.begin(condition)},

// return the number of states currently on the stack
stateStackSize:function stateStackSize(){return this.conditionStack.length},
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
/*``*/) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* IGNORE */
break;
case 1:/* IGNORE */
break;
case 2:/* skip whitespace */
break;
case 3:return 28
break;
case 4:return 67
break;
case 5:return 68
break;
case 6:return 66
break;
case 7:return 65
break;
case 8:return 69
break;
case 9:return 31
break;
case 10:return 33
break;
case 11:return 32
break;
case 12:return 70
break;
case 13:return 78
break;
case 14:return 79
break;
case 15:return 76
break;
case 16:return 77
break;
case 17:return 74
break;
case 18:return 75
break;
case 19:return 55
break;
case 20:return 9
break;
case 21:return 10
break;
case 22:return 11
break;
case 23:return 13
break;
case 24:return 53
break;
case 25:return 54
break;
case 26:return 72
break;
case 27:return 62
break;
case 28:return 64
break;
case 29:return 63
break;
case 30:return 26
break;
case 31:return 56
break;
case 32:return 7
break;
case 33:return 57
break;
case 34:return 58
break;
case 35:return 49
break;
case 36:return 48
break;
case 37:return 41
break;
case 38:return 40
break;
case 39:return 39
break;
case 40:return 38
break;
case 41:return 37
break;
case 42:return 36
break;
case 43:return 34
break;
case 44:return 35
break;
case 45:return 42
break;
case 46:return 43
break;
case 47:return 44
break;
case 48:return 45
break;
case 49:return 46
break;
case 50:return 47
break;
case 51:return 71
break;
case 52:return 30
break;
case 53:return 21
break;
case 54:return 61
break;
case 55:return 51
break;
case 56:return 8;
break;
case 57:return 50;
break;
case 58:return 5;
break;
case 59:return 'INVALID'
break;
}
},
rules: [/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/,/^(?:\/\/.*)/,/^(?:(\s+|\n+|\t+|\r+))/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:%c\b)/,/^(?:%d\b)/,/^(?:%f\b)/,/^(?:%)/,/^(?:==)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:if\b)/,/^(?:P\b)/,/^(?:H\b)/,/^(?:S\b)/,/^(?:printf\b)/,/^(?:Stack\b)/,/^(?:void\b)/,/^(?:Heap\b)/,/^(?:Pool\b)/,/^(?:exit\b)/,/^(?:\$\$_SGB\b)/,/^(?:\$\$_outNum\b)/,/^(?:\$\$_outStr\b)/,/^(?:\$\$_inNum\b)/,/^(?:\$\$_inStr\b)/,/^(?:\$\$_getBool\b)/,/^(?:\$\$_getNum\b)/,/^(?:\$\$_show\b)/,/^(?:\$\$_getRandom\b)/,/^(?:\$\$_getStrLength\b)/,/^(?:\$\$_Mayor\b)/,/^(?:\$\$_Menor\b)/,/^(?:\$\$_Igual\b)/,/^(?:\$\$_NumAStr\b)/,/^(?:\$\$_BoolaStr\b)/,/^(?:goto\b)/,/^(?:;)/,/^(?::)/,/^(?:(t)[0-9]+\b)/,/^(?:(L)[0-9]+\b)/,/^(?:[a-zA-Z]([a-zA-Z]|[0-9]|_)*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args){if(!args[1]){console.log("Usage: "+args[0]+" FILE");process.exit(1)}var source=require("fs").readFileSync(require("path").normalize(args[1]),"utf8");return exports.parser.parse(source)};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}