'use strict';
function ExisteVariable(id,ambito)
{
	for(var x=0;x<this.Variables.length;x++)
	{
		if(this.Variables[x].nombre==id&&this.Variables[x].get_Ambito()==ambito)
		{
			return true;
		}
	}
	return false;
}
function Escribir()
{
	for(var x=0;x<this.Elementos_Declarados.length;x++)
	{
		document.write(x+'. Elemento: '+this.Elementos_Declarados[x].nombre+'<br>');
		this.Elementos_Declarados[x].Escribir_Atributos();
	}
	for(var x=0;x<this.Variables.length;x++)
	{
		document.write(x+'. Variable: '+this.Variables[x].nombre+', Ambito: '+this.Variables[x].ambito+'<br>');
		this.Variables[x].Escribir_Ambito();
	}
	for(var x=0;x<this.Funciones.length;x++)
	{
		document.write(x+'. Funcion: '+this.Funciones[x].nombre+', Tipo: '+this.Funciones[x].tipo+'<br>');
		this.Funciones[x].Escribir_Parametros();
	}
	for(var x=0;x<this.Errores.length;x++)
	{
		console.log('Tipo:'+this.Errores[x].tipo+' Mensaje: '+this.Errores[x].mensaje+' posicion: ('+this.Errores[x].fila+','+this.Errores[x].columna+')');
 	}
}
function Definir_Tam()
{
	for(var x=0;x<this.Variables.length;x++)
	{
    	if(this.Variables[x].tipo.includes("Arreglo"))
    	{
       	this.Variables[x].posicion=this.tamvar
       	this.Variables[x].tamarreglo=this.Variables[x].Length_Arreglo()
       	this.tamvar=this.tamvar+this.Variables[x].tamarreglo;
    	}
    	else{
     	 this.Variables[x].posicion=this.tamvar
      	this.tamvar=this.tamvar+1
    	}
  	}
	for(var x=0;x<this.Funciones.length;x++)
	{
		this.Funciones[x].definir_tam();
		//console.log(this.Funciones[x].nombre+'->'+this.Funciones[x].tam)
	}
	for(var x=0;x<this.Elementos_Declarados.length;x++)
	{
		this.Elementos_Declarados[x].definir_tam2();
		console.log(this.Elementos_Declarados[x].nombre+'->'+this.Elementos_Declarados[x].tam)
	}
}
function ExisteElemento(id)
{
	for(var x=0;x<this.Elementos_Declarados.length;x++)
	{
		if(this.Elementos_Declarados[x].nombre==id)
		{
			return true;
		}
	}
	return false;
}
function ObtenerElemento(id)
{
	for(var x=0;x<this.Elementos_Declarados.length;x++)
	{
		if(this.Elementos_Declarados[x].nombre==id)
		{
			return this.Elementos_Declarados[x];
		}
	}
	return null;
}
function ExisteAtributo(id)
{
	if(this.Elementos.length>0)
	{
      var si=this.Elementos[this.Elementos.length-1];
      return si.ExisteAtributo2(id);
	}
	else {
		return true;
	}
	return si;
}
function AgregarAtributo(atri)
{
	if(this.Elementos.length>0)
	{
      this.Elementos[this.Elementos.length-1].atributos.push(atri);
	}
 }
function Obtener_Funcion(id,Parametros)
{
	for(var x=0;x<this.Funciones.length;x++)
	{
		if(this.Funciones[x].nombre==id)
		{
			if(this.Funciones[x].ParametrosIguales(Parametros))
			{
				return this.Funciones[x]
			}
		}
	}
	return null;
}
function ExisteFuncion(id,Parametros)
{
	for(var x=0;x<this.Funciones.length;x++)
	{
		if(this.Funciones[x].nombre==id)
		{
			if(this.Funciones[x].ParametrosIguales(Parametros))
			{
				return true
			}
		}
	}
	return false;
}
function AgregarVariable(vars)
{

	var text;
	var indice=0;
	vars.ambito=new Array();
	while(this.ambitos[indice]!=null)
	{
		text=this.ambitos[indice];
		vars.ambito.push(text)
		indice=indice+1;
	}
	this.Variables.push(vars)
}
//definimos el método imprimete para la clase AlumnoUniversitario 
function imprimete(){ 
	this.cont_temp=this.cont_temp+1
   	 return 't'+this.cont_temp

} 

function AgregarFuncion(funcion)
{
	funcion.alias='Metodo'+this.cont_met
	this.cont_met=this.cont_met+1
	this.Funciones.push(funcion)
}
function AgregarElemento(Element)
	{	
	this.Elementos.push(Element)
	
	}
function PopElemento()
{
	var ele=this.Elementos.pop()
	this.Elementos_Declarados.push(ele);
}
function AgregarError(fila,columna,mensaje,tipo)
{
	console.log('Error->'+mensaje);
	var err= new errores_compi(fila,columna,mensaje,tipo);
	this.Errores.push(err);
}
function PushAmbito(id)
{
	this.ambitos.push(id)
}
function PopAmbito()
{
	var amb=this.Ambito()
   if(!amb.includes('$'))
   {
   	 this.Llenar_Variables(amb)
   }
	this.ambitos.pop()
}
function Llenar_Variables(amb){
	for(var x=this.Variables.length-1;x>-1;x--)
	{
		var ambito=this.Variables[x].ambito[this.Variables[x].ambito.length-1]
		if((!ambito.includes('$'))&ambito!=amb)
		{
			break;
		}
		this.Funciones[this.Funciones.length-1].variables.push(this.Variables[x]);
		console.log('Agregando Variable a: '+amb+', id '+this.Variables[x].nombre+', ambito '+this.Variables[x].ambito);
		this.Variables.pop()
	}
}
function HayErrores()
{
	if(this.Errores.length>0)
	{
		return true
	}
	return false
}
function Ambito()
{
	if(this.ambitos.length>0)
	{
		return this.ambitos[this.ambitos.length-1]
	}
	return 'global'
}
function getSentencia()
{
	this.cont_sentencia=this.cont_sentencia+1
	return '$sentencia'+this.cont_sentencia
}
function getTemp()
{
	this.cont_temp=this.cont_temp+1
	return 't'+this.cont_temp
}
function getETQ()
{
	this.cont_sentencia=this.cont_sentencia+1
	return 'L'+this.cont_sentencia
}
function SistemaTipos(var1,var2,op)
{
   switch(op)
   {
   	case '+':
   		this.Sistema_Suma(var1,var2)
   		break;
   	case '-':
   		this.Sistema_Resta(var1,var2)
   		break;
   	case '*':
   		this.Sistema_Mul(var1,var2)
   		break;
   	case '/':
   		this.Sistema_Division(var1,var2)
   		break;
   	case '%':
   		this.Sistema_Mod(var1,var2)
   		break;
   	case '^':
   		this.Sistema_Potencia(var1,var2);
   		break;
   	case '<':
   		this.Sistema_Menor(var1,var2)
   		break;
   	case '>':
   		this.Sistema_Mayor(var1,var2)
   		break;
   	case '<=':
   		this.Sistema_MenorIgual(var1,var2)
   		break;
   	case '>=':
   		this.Sistema_MayorIgual(var1,var2)
   		break;
   	case '==':
   		this.Sistema_Igual(var1,var2)
   		break;
   	case '!=':
   		this.Sistema_Diferente(var1,var2);
   		break;
   }
}
function Sistema_Diferente(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' != '+var2.valor+') goto '+this.temp.verdad+';'
			break;
		case 'strstr':
		    break;
		case 'boolbool':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' != '+var2.valor+') goto '+this.temp.verdad+';'
		    break;
		default:
		if(var1.tipo=='null'||var2.tipo=='null')
		{
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' != '+var2.valor+') goto '+this.temp.verdad+';'
		}
		else {
		this.imprimir('%Error no se soporta la operacion relacional '+var1.tipo +' != '+var2.tipo+';')
		}
	}
}
function Sistema_Igual(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' == '+var2.valor+') goto '+this.temp.verdad+';'
			break;
		case 'strstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var1.valor+';')
			temp=this.getTemp();
			this.imprimir(temp+' = P + 2;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_Igual();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			this.temp=new OR(this.getETQ(),this.getETQ())
			this.temp.valor=this.getTemp()
			this.temp.condicion='if ( '+temp+' == 1 ) goto '+this.temp.verdad+';'
		    break;
		case 'boolbool':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' == '+var2.valor+') goto '+this.temp.verdad+';'
		    break;
		default:
		if(var1.tipo=='null'||var2.tipo=='null')
		{
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' == '+var2.valor+') goto '+this.temp.verdad+';'
		}
		else
			{
				this.imprimir('%Error no se soporta la operacion relacional '+var1.tipo +' == '+var2.tipo+';')
			}
	}
}
function Sistema_Mayor(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' > '+var2.valor+') goto '+this.temp.verdad+';'
			break;
		case 'strstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var1.valor+';')
			temp=this.getTemp();
			this.imprimir(temp+' = P + 2;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_Mayor();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			this.temp=new OR(this.getETQ(),this.getETQ())
			this.temp.valor=this.getTemp()
			this.temp.condicion='if ( '+temp+' == 1 ) goto '+this.temp.verdad+';'
		    break;
		default:
		this.imprimir('%Error no se soporta la operacion relacional '+var1.tipo +' > '+var2.tipo+';')

	}
}
function Sistema_MayorIgual(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' >= '+var2.valor+') goto '+this.temp.verdad+';'
			break;
		default:
		this.imprimir('%Error no se soporta la operacion relacional '+var1.tipo +' >= '+var2.tipo+';')

	}
}
function Sistema_Menor(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' < '+var2.valor+') goto '+this.temp.verdad+';'
			break;
		case 'strstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var1.valor+';')
			temp=this.getTemp();
			this.imprimir(temp+' = P + 2;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_Menor();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			this.temp=new OR(this.getETQ(),this.getETQ())
			this.temp.valor=this.getTemp()
			this.temp.condicion='if ( '+temp+' == 1 ) goto '+this.temp.verdad+';'
		    break;
		default:
		this.imprimir('%Error no se soporta la operacion relacional '+var1.tipo +' < '+var2.tipo+';')

	}
}
function Sistema_MenorIgual(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new OR(this.getETQ(),this.getETQ())
		this.temp.valor=this.getTemp()
		this.temp.condicion='if ( '+var1.valor+' <= '+var2.valor+') goto '+this.temp.verdad+';'
			break;
		default:
		this.imprimir('%Error no se soporta la operacion relacional '+var1.tipo +' <= '+var2.tipo+';')

	}
}
function Sistema_Mul(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' * '+var2.valor+';')
		break;
		case 'numbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' * '+var2.valor+';')
		break;
		case 'boolnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' * '+var2.valor+';')
		break;
		case 'boolbool':
		default:
		this.temp=new Variable('','num')
		this.temp.valor=0
		this.imprimir('%Error El sistema de tipos no soporta '+var1.tipo +' * '+var2.tipo+';')
		this.AgregarError()
	}
}
function Sistema_Resta(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' - '+var2.valor+';')
		break;
		case 'numbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' - '+var2.valor+';')
		break;
		case 'boolnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' - '+var2.valor+';')
		break;
		default:
		this.temp=new Variable('','num')
		this.temp.valor=0
		this.imprimir('%Error El sistema de tipos no soporta '+var1.tipo +' - '+var2.tipo+';')
	}
}
function Sistema_Division(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' / '+var2.valor+';')
		break;
		case 'numbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' / '+var2.valor+';')
		break;
		case 'boolnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' / '+var2.valor+';')
		break;
		default:
		this.temp=new Variable('','num')
		this.temp.valor=0
		this.imprimir('%Error El sistema de tipos no soporta '+var1.tipo +' / '+var2.tipo+';')
	}
}
function Sistema_Potencia(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' ^ '+var2.valor+';')
		break;
		case 'numbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' ^ '+var2.valor+';')
		break;
		case 'boolnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' ^ '+var2.valor+';')
		break;
		default:
		this.temp=new Variable('','num')
		this.temp.valor=0
		this.imprimir('%Error El sistema de tipos no soporta '+var1.tipo +' ^ '+var2.tipo+';')

	}
}
function Sistema_Mod(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' % '+var2.valor+';')
		break;
		case 'numbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' % '+var2.valor+';')
		break;
		case 'boolnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' % '+var2.valor+';')
		break;
		default:
		this.temp=new Variable('','num')
		this.temp.valor=0
		this.imprimir('%Error El sistema de tipos no soporta '+var1.tipo +' % '+var2.tipo+';')

	}
}
function Sistema_Suma(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' + '+var2.valor+';')
		break;
		case 'numstr':
			this.imprimir('P = P + '+this.tam+';')
			var temp = this.getTemp()
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var1.valor+';')
			this.imprimir('$$_NumAStr();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];//Posicion Retorno')
			this.imprimir('P = P - '+this.tam+';')
			this.temp=new Variable('','str');
			this.temp.valor=this.Concatenar_Cadena(temp,var2.valor);
		break;
		case 'strnum':
			this.imprimir('P = P + '+this.tam+';')
			var temp = this.getTemp()
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_NumAStr();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];//Posicion Retorno')
			this.imprimir('P = P - '+this.tam+';')
			this.temp=new Variable('','str');
			this.temp.valor=this.Concatenar_Cadena(var1.valor,temp);
		break;
		case 'numbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' + '+var2.valor+';')
		break;
		case 'boolnum':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' + '+var2.valor+';')
		break;
		case 'strbool':
			var s=''
			if(var2.valor=1)
			{
				s=this.ProcesarCadena('"true"');
			}
			else {
				s=this.ProcesarCadena('"false"');
			}
			this.temp=new Variable('','str');
			this.temp.valor=this.Concatenar_Cadena(var1.valor,s.valor);
		break;
		case 'boolstr':
			var s=''
			if(var1.valor=1)
			{
				s=this.ProcesarCadena('"true"');
			}
			else {
				s=this.ProcesarCadena('"false"');
			}
			this.temp=new Variable('','str');
			this.temp.valor=this.Concatenar_Cadena(s.valor,var2.valor);
		break;
		case 'strstr':
		this.temp=new Variable('','str');
		this.temp.valor=this.Concatenar_Cadena(var1.valor,var2.valor);
		break;
		case 'boolbool':
		this.temp=new Variable('','num')
		this.temp.valor=this.getTemp()
		this.imprimir(this.temp.valor+' = '+var1.valor+' + '+var2.valor+';')
		break;
		default:
		this.temp=new Variable('','num')
		this.temp.valor=0
		this.imprimir('%Error El sistema de tipos no soporta '+var1.tipo +' + '+var2.tipo+';')
	}
}
function Imprimir_Relacional(rel)
{
	try{
		if(rel.tipo.toLowerCase()=='bool')
		{
			var valor=rel.valor;
			rel=new OR(this.getETQ(),this.getETQ())
			this.imprimir('if ( '+valor+'==1 ) goto '+rel.verdad+';\ngoto '+rel.falso+';')
			return rel;
		}
		else {
			var valor=rel.valor;
			rel=new OR(this.getETQ(),this.getETQ())
			this.imprimir('if ( 1=='+valor+' ) goto '+rel.verdad+';\ngoto '+rel.falso+';')
			return rel;
		}
	}catch(err){
		//console.log(err)
		if(rel.condicion!='')
		{
        this.imprimir(rel.condicion)
        this.imprimir('goto '+rel.falso+';')
        rel.condicion=''
    	} 
    	return rel;
	}
}
function PushCondicion(cond)
{
	this.condiciones.push(cond);
}
function PopCondicion()
{
	this.condiciones.pop();
}
function Condicion()
{
	return this.condiciones[this.condiciones.length-1]
}
function Imprimir_Case(tipo,inferior,superior,fila,col)
{
	var swi=this.Switches[this.Switches.length-1]
	var etq_verdad=this.getETQ()
	var etq_falso=this.getETQ()
	if(swi.tipo!='str'&&(tipo=='char'|tipo=='rchar'))
	{
		this.imprimir('//Error case:str se Compara con un '+swi.tipo);
		this.imprimir('if (0 == 1) goto '+etq_verdad+';')
		this.imprimir('goto '+etq_falso+';');
		this.imprimir(etq_verdad+':');
		this.AgregarError(fila,col,'Error case:str se Compara con un '+swi.tipo,'Semántico')
		return etq_falso
	}
	if(swi.tipo!='num'&&(tipo=='num'|tipo=='rnum'))
	{
		this.imprimir('//Error case:num se Compara con un '+swi.tipo);
		this.imprimir('if (0 == 1) goto '+etq_verdad+';')
		this.imprimir('goto '+etq_falso+';');
		this.imprimir(etq_verdad+':');
		this.AgregarError(fila,col,'Error case:num se Compara con un '+swi.tipo,'Semántico')
		return etq_falso
	}
	switch(tipo)
	{
		case 'num':
				this.imprimir('if ('+swi.valor+' == '+inferior+') goto '+etq_verdad+';')
				this.imprimir('goto '+etq_falso+';');
				this.imprimir(this.siguiente_swi+etq_verdad+':');
				if(swi.ambito==0)
			{
				this.siguiente_swi=this.getETQ()+',';
			}
		break;
		case 'char':
			var ch=0;
			 if(inferior.length==3)
			 {
			 	ch=inferior.substring(1, inferior.length-1).charCodeAt(0);
			 }
			 else {
			 	this.imprimir("//Error se utilizo case: "+inferior);
			 	this.AgregarError(fila,col,'Error se utilizo case: '+inferior,'Semántico')
			 }
			var temp4=this.getTemp();
			this.imprimir(temp4+' = Pool['+swi.valor+'];');
			this.imprimir('if ('+temp4+' == '+ch+') goto '+etq_verdad+';')
			this.imprimir('goto '+etq_falso+';');
			this.imprimir(this.siguiente_swi+etq_verdad+':');
			if(swi.ambito==0)
			{
				this.siguiente_swi=this.getETQ()+',';
			}
		break;
		case 'rnum':
			var etq_verdad2=this.getETQ()
			var etq_falso2=this.getETQ()
				this.imprimir('if ('+swi.valor+' >= '+inferior+') goto '+etq_verdad+';')
				this.imprimir('goto '+etq_falso+';');
				this.imprimir(etq_verdad+':');
				this.imprimir('if ('+swi.valor+' <= '+superior+') goto '+etq_verdad2+';')
				this.imprimir('goto '+etq_falso2+';');
				this.imprimir(this.siguiente_swi+etq_verdad2+':');
				etq_falso=etq_falso+','+etq_falso2;
			if(swi.ambito==0)
			{
				this.siguiente_swi=this.getETQ()+',';
			}
		break;
		case 'rchar':
			var ch=0;
			 if(inferior.length==3)
			 {
			 	ch=inferior.substring(1, inferior.length-1).charCodeAt(0);
			 }
			 else {
			 	this.imprimir('//Error se utilizo case: '+inferior);
			 	this.AgregarError(fila,col,'Error se utilizo case: '+inferior,'Semántico')
			 }
			 var ch2=0;
			 if(superior.length==3)
			 {
			 	ch2=superior.substring(1, superior.length-1).charCodeAt(0);
			 }
			 else {
			 	this.imprimir("//Error se utilizo case: "+superior);
			 	this.AgregarError(fila,col,'Error se utilizo case: '+superior,'Semántico')
			 }
			var etq_verdad2=this.getETQ()
			var etq_falso2=this.getETQ()
			var temp4=this.getTemp();
			this.imprimir(temp4+' = Pool['+swi.valor+'];');
				this.imprimir('if ('+temp4+' >= '+ch+') goto '+etq_verdad+';')
				this.imprimir('goto '+etq_falso+';');
				this.imprimir(etq_verdad+':');
				this.imprimir('if ('+temp4+' <= '+ch2+') goto '+etq_verdad2+';')
				this.imprimir('goto '+etq_falso2+';');
				this.imprimir(this.siguiente_swi+etq_verdad2+':');
				etq_falso=etq_falso+','+etq_falso2;
				if(swi.ambito==0)
				{
				this.siguiente_swi=this.getETQ()+',';
				}
		break;
	}
	return etq_falso;
}
function imprimir(text)
{
  if(!this.glob)
   {this.consola.value =this.consola.value + text+'\n'}
   else{
   	this.globales=this.globales+text+'\n';
   }
}
function ProcesarCadena(cad)
{
  var x;
  if(cad.length>2)
  {
  cad=cad.substring(1, cad.length-1);
  for( x=0;x<cad.length;x++)
  {
  	var temp=this.getTemp();
  	this.imprimir(temp+' = S + '+x+';');
  	this.imprimir('Pool['+temp+'] = '+cad.charCodeAt(x)+'; //# ASCII de '+cad.charAt(x))
  }
  var temp3=this.getTemp();
  this.imprimir(temp3+' = S + '+x+';');
  this.imprimir('Pool['+temp3+'] = 0; //Fin de Cadena' )
  var temp2=this.getTemp();
  this.imprimir(temp2+' = S;//posicion de Inicio de '+cad)
  this.imprimir('S = S + '+(x+1)+';');
  var vars=new Variable('','str');
  vars.valor=temp2;
  return vars;
  }
  else {
  	var temp = this.getTemp();
  	this.imprimir(temp+'= S;')
  	this.imprimir("Pool[S] = 0;")
  	this.imprimir("S = S + 1;")
  	var vars=new Variable('','str');
  	vars.valor=temp;
  	return vars;
  }
}
function Imprimir_BreaK(id,fila,columna)
{
	if(id!='')
	{
		for(var a=this.Breaks.length-1;a>=0;a--)
		{
			var breaker=this.Breaks[a]
			if(breaker.nombre==id)
			{
				this.imprimir('goto '+breaker.tipo+'; //Break '+id);
				return
			}
		}
		this.imprimir('//Error no existe sentencia para Break '+id);
		this.AgregarError(fila,columna,'Error no existe sentencia para Break '+id,'Semántico');
	}
	else {
		if(this.Breaks.length>0)
		{
			var breaker=this.Breaks[this.Breaks.length-1]
			this.imprimir('goto '+breaker.tipo+';  //break');
		}
		else
		{
			this.imprimir('//Error Break no afecta a ninguna sentencia;')
			this.AgregarError(fila,col,'Error Break no afecta a ninguna sentencia','Semántico');
		}
	}
}
function Imprimir_Continue(fila,columna)
{
	if(this.Continues.length>0)
	{
		this.imprimir('goto '+this.Continues[this.Continues.length-1]+'; //Continue')
	}
	else{
		this.AgregarError(fila,col,'Error la instruccion Continue no afecta a ninguna sentencia ','Semántico')
	}
}
function Imprimir_Cadena(S_Pool)
{
	var temp=this.getTemp()
	var temp2=this.getTemp()
	var etq_inicio=this.getETQ()
	var etq_fin=this.getETQ()
	this.imprimir(temp+' = '+String(S_Pool)+';')
	this.imprimir(etq_inicio+':')
	this.imprimir(temp2+' = Pool['+temp+'];')
	this.imprimir('if ('+temp2+' == '+0+' ) goto '+etq_fin+';')
	this.imprimir('printf(%c,'+temp2+');')
	this.imprimir(temp+' = '+temp+' + 1;')
	this.imprimir('goto '+etq_inicio+';')
	this.imprimir(etq_fin+':')
}
function Concatenar_Cadena(S_Pool,S_Pool2){
	var S = this.getTemp()
	var temp=this.getTemp()
	var temp2=this.getTemp()
	var etq_inicio=this.getETQ()
	var etq_fin=this.getETQ()
	this.imprimir(S+' = S;');
	this.imprimir(temp+' = '+S_Pool+';')
	this.imprimir(etq_inicio+':')
	this.imprimir(temp2+' = Pool['+temp+'];')
	this.imprimir('if ('+temp2+' == '+0+' ) goto '+etq_fin+';')
	this.imprimir('Pool[S] = '+temp2+';')
	this.imprimir('S = S + 1;')
	this.imprimir(temp+' = '+temp+' + 1;')
	this.imprimir('goto '+etq_inicio+';')
	this.imprimir(etq_fin+':')
	temp=this.getTemp()
	temp2=this.getTemp()
	etq_inicio=this.getETQ()
	etq_fin=this.getETQ()
	this.imprimir(temp+' = '+S_Pool2+';')
	this.imprimir(etq_inicio+':')
	this.imprimir(temp2+' = Pool['+temp+'];')
	this.imprimir('if ('+temp2+' == '+0+' ) goto '+etq_fin+';')
	this.imprimir('Pool[S] = '+temp2+';')
	this.imprimir('S = S + 1;')
	this.imprimir(temp+' = '+temp+' + 1;')
	this.imprimir('goto '+etq_inicio+';')
	this.imprimir(etq_fin+':')
	this.imprimir('Pool[S] = 0;')
	this.imprimir('S = S + 1;')
	return S;
}
function Buscar_Global(id)
{
	for(var x=0;x<this.Variables.length;x++)
	{
		if(this.Variables[x].nombre==id)
		{
			return this.Variables[x]
		}
	}
	return null
}
//definimos el constructor para la clase 
function Imprimir_Asginacion(id,Var_Asignada,fila,columna,donde,dec)
{
	var vars=this.Funcion_Actual.get_Var(id,this.ambitos)
	if(vars!=null)
	{
		if(donde=='s')
		{
			if(dec)
			{
				if(vars.tipo=='str')
				{
				   var temp=this.getTemp();
				   this.imprimir(temp+' = P + '+vars.posicion+';')
				   this.imprimir('Stack['+temp+'] = H;')
				   this.imprimir('H = H + 1;')
				}
			}
			this.Casteo_Implicito(vars,Var_Asignada)}
		else {
			this.Casteo_Implicito_Heap(vars,Var_Asignada)
		}
	}
	else {
		vars=this.Buscar_Global(id)
		if(vars!=null)
		{
			this.Casteo_Implicito_Heap(vars,Var_Asignada)
		}
		else {
			this.AgregarError(fila,columna,'No existe la variable con id: '+id+' en el ambito: '+this.Ambito(),'Semántico');
		}
	}
}
function Imprimir_Asginacion_Globales(id,Var_Asignada,fila,columna,donde)
{
		var vars=this.Buscar_Global(id)
		if(vars!=null)
		{
			if(vars.tipo=='str')
			{this.imprimir('Heap['+vars.posicion+'] = H;')
			this.imprimir('H = H + 1;')}
			this.Casteo_Implicito_Heap(vars,Var_Asignada);
		}
		else {
			this.AgregarError(fila,columna,'No existe la variable con id: '+id+' en el ambito: '+this.Ambito(),'Semántico');
		}
}
function Variable_Busqueda(id,fila,columna)
{

	var vars=this.Funcion_Actual.get_Var(id,this.ambitos)
	if(vars!=null)
	{
		return vars;
	}
	else {
		vars=this.Buscar_Global(id)
		if(vars!=null)
		{
			return vars
		}
		else {
			this.AgregarError(fila,columna,'No existe la variable con id: '+id+' en el ambito: '+this.Ambito(),'Semántico');
		}
	}
	console.log(id);
	return null;

}
function Casteo_Implicito(var1,var2)
{
	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
			var temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			break;
		case 'numbool':
			var temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			break;
		case 'numstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = 0; //0 para Decimal');
			temp=this.getTemp();
			this.imprimir(temp+' = P + 2;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			temp=this.getTemp();
			this.imprimir(temp+' = P + 3;')
			this.imprimir('Stack['+temp+'] = 0;');
			this.imprimir('$$_getNum();');
			var temp2=this.getTemp();
			this.imprimir(temp2+' = Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';//posicion de '+var1.nombre)
			this.imprimir('Stack['+temp+'] = '+temp2+';')
			break;
		case 'boolnum':
			var etq_inicio=this.getETQ()
			var etq_fin =this.getETQ()
			var temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';')
			this.imprimir('if ( 0 =='+var2.valor+') goto '+etq_inicio+';')
			this.imprimir('Stack['+temp+'] = 1;');
			this.imprimir('goto '+etq_fin+';');
			this.imprimir(etq_inicio+':');
			this.imprimir('Stack['+temp+'] = 0;');
			this.imprimir(etq_fin+':');
			break;
		case 'boolbool':
			var temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			break;
		case 'boolstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+'; //Parametro Cadena');
			this.imprimir('$$_getBool();');
			var temp2=this.getTemp();
			this.imprimir(temp2+' = Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';//posicion de '+var1.nombre)
			this.imprimir('Stack['+temp+'] = '+temp2+';')
			break;
		case 'strnum':
		    var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_NumAStr();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			var temp2=this.getTemp()
			this.imprimir(temp2+' = P + '+var1.posicion+';')
			var temp3=this.getTemp()
			this.imprimir(temp3+'= Stack['+temp2+'];');
			this.imprimir('Heap['+temp3+'] = '+temp+';')
			break;
		case 'strbool':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_getBool();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			var temp2=this.getTemp()
			this.imprimir(temp2+' = P + '+var1.posicion+';')
			var temp3=this.getTemp()
			this.imprimir(temp3+'= Stack['+temp2+'];');
			this.imprimir('Heap['+temp3+'] = '+temp+';')
			break;
		case 'strstr':
			var temp=this.getTemp();
			this.imprimir(temp+' = P + '+var1.posicion+';')
			var temp2=this.getTemp();
			this.imprimir(temp2+' = Stack['+temp+'];');
			this.imprimir('Heap['+temp2+' ] = '+var2.valor+';')
			break
		default:
			if(var2.tipo=='null')
			{
				var temp=this.getTemp();
				this.imprimir(temp+' = P + '+var1.posicion+';')
				this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			}
			else if(var2.tipo==var1.tipo)
			{
				var temp=this.getTemp();
				this.imprimir(temp+' = P + '+var1.posicion+';')
				this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			}
			else {
				this.AgregarError(yylineno,yyleng,'Error no se puede asignar el tipo: '+var2.tipo+' a un tipo: '+var1.tipo,'Semántico')
			}
	}
}
function Casteo_Implicito_Heap(var1,var2)
{

	switch(var1.tipo.toLowerCase()+var2.tipo.toLowerCase())
	{
		case 'numnum':
			this.imprimir('Heap['+var1.posicion+'] = '+var2.valor+';');
			break;
		case 'numbool':
			this.imprimir('Heap['+var1.posicion+'] = '+var2.valor+';');
			break;
		case 'numstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = 0; //0 para Decimal');
			temp=this.getTemp();
			this.imprimir(temp+' = P + 2;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';');
			temp=this.getTemp();
			this.imprimir(temp+' = P + 3;')
			this.imprimir('Stack['+temp+'] = 0;');
			this.imprimir('$$_getNum();');
			var temp2=this.getTemp();
			this.imprimir(temp2+' = Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			this.imprimir('Heap['+var1.posicion+'] = '+temp2+';')
			break;
		case 'boolnum':
			var etq_inicio=this.getETQ()
			var etq_fin =this.getETQ()
			this.imprimir('if ( 0 =='+var2.valor+') goto '+etq_inicio+';')
			this.imprimir('Heap['+var1.posicion+'] = 1;');
			this.imprimir('goto '+etq_fin+';');
			this.imprimir(etq_inicio+':');
			this.imprimir('Heap['+var1.posicion+'] = 0;');
			this.imprimir(etq_fin+':');
			break;
		case 'boolbool':
			this.imprimir('Heap['+var1.posicion+'] = '+var2.valor+';');
			break;
		case 'boolstr':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+'; //Parametro Cadena');
			this.imprimir('$$_getBool();');
			var temp2=this.getTemp();
			this.imprimir(temp2+' = Stack[P];')
			this.imprimir('P = P - '+this.tam+';');
			this.imprimir('Heap['+var1.posicion+'] = '+temp2+';')
			break;
		case 'strnum':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_NumAStr();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam);
			var temp2=this.getTemp()
			this.imprimir(temp2+' = Heap['+var1.posicion+'];');
			this.imprimir('Heap['+temp2+'] = '+temp+';')
			break;
		case 'strbool':
			var temp=this.getTemp();
			this.imprimir('P = P + '+this.tam+';');
			this.imprimir(temp+' = P + 1;')
			this.imprimir('Stack['+temp+'] = '+var2.valor+';')
			this.imprimir('$$_getBool();')
			temp=this.getTemp()
			this.imprimir(temp+'= Stack[P];')
			this.imprimir('P = P - '+this.tam);
			var temp2=this.getTemp()
			this.imprimir(temp2+' = Heap['+var1.posicion+'];');
			this.imprimir('Heap['+temp2+'] = '+temp+';')
			break;
		case 'strstr':
			var temp2=this.getTemp()
			this.imprimir(temp2+' = Heap['+var1.posicion+'];');
			this.imprimir('Heap['+temp2+'] = '+var2.valor+';')
			break
		default:
			if(var2.tipo=='null')
			{
				this.imprimir('Heap['+var1.posicion+'] = '+var2.valor+';');
			}
			else if(var2.tipo==var1.tipo)
			{
				this.imprimir('Heap['+var1.posicion+'] = '+var2.valor+';');
			}
			else {
				this.AgregarError(yylineno,yyleng,'Error no se puede asignar el tipo: '+var2.tipo+' a un tipo: '+var1.tipo,'Semántico')
			}
	}
}
function Mapeo_Arreglo(Mapeada,asignado)
{
	if(Mapeada!=null)
     {
     var temp=this.getTemp()
     var temp2=this.getTemp()
     if(Mapeada.get_Ambito()!='global')
     {
     this.imprimir(temp+' = P + '+Mapeada.posicion+';')
     this.imprimir(temp2+'= Stack['+temp+'];')
     temp=this.getTemp()
     this.imprimir(temp+' = '+temp2+' + '+Mapeada.valor+';//Posicion Real del Mapeo')
     var a_asignar=new Variable('',Mapeada.getTipoReal())
     a_asignar.posicion=temp;
     this.Casteo_Implicito_Heap(a_asignar,asignado)
 	 }
 	 else {
 	 this.imprimir(temp2+'= Heap['+Mapeada.posicion+'];')
 	 this.imprimir(temp+' = '+temp2+' + '+Mapeada.valor+';//Posicion Real del Mapeo Global')
     var a_asignar=new Variable('',Mapeada.getTipoReal())
     a_asignar.posicion=temp;
     this.Casteo_Implicito_Heap(a_asignar,asignado)
 	 }
     }
}
function Crear_Constructor(tipo,vars,tipo_constructor,inicio_relativo,Pila,fila,columna)
{
	if(tipo==tipo_constructor)
	{
		var Elemento = this.ObtenerElemento(tipo_constructor);
		if(Elemento!=null)
		{var temp=this.getTemp()
		if(Pila=='p')
		{this.imprimir(temp+' = '+inicio_relativo+' + '+vars.posicion+'; //posicion relativa del inicio del elemento')
		this.imprimir('Stack['+temp+'] = H; //Guardamos el Puntero al Heap')
		}
		else{
		this.imprimir('Heap['+vars.posicion+'] = H; //Guardamos el Puntero al Heap')
		}
	    temp=this.getTemp()
	    this.imprimir(temp+' = H;')
	    this.imprimir('H = H + '+Elemento.tam+';//Dezplasamos H el tamanio del Elemento')
	    this.Inicializar_Por_Defecto(Elemento,temp,fila,columna)
		}
		else {
				this.AgregarError(fila,columna,'Error se quiso crear una instacia, con un constructor tipo: '+tipo_constructor+'el cual no existe','Semántico')
		}
	}
	else {
		this.AgregarError(fila,columna,'Error se quiso crear una instacia de un element tipo '+tipo+', con un constructor tipo: '+tipo_constructor,'Semántico')
	}
}
function Inicializar_Por_Defecto(Elemento,posicion_relativa,fila,columna)
{
 for(var x=0;x<Elemento.atributos.length;x++)
 {
 	var vars=Elemento.atributos[x];
 	if(vars.valor!='')
 	{
 		var temp=this.getTemp()
 		this.imprimir(temp+' = '+posicion_relativa+' + '+vars.posicion+';')
 		try{
 			var vars2= new Variable('',vars.tipo)
 			vars2.posicion=temp;
 			if(vars.tipo.includes('Arreglo'))
 			{ 
 				vars2.tipo=vars.getTipoReal()
 			}
 			var valor=parser2.parse(vars.valor);
 			if(vars.valor.includes('create'))
 			{
 				this.Crear_Constructor(vars.tipo,vars2,valor,'H','h',fila,columna)
 			}
 			else{
 				if(vars.tipo=='str')
 				{
 					this.imprimir('Heap['+temp+'] = H;')
					this.imprimir('H = H + 1;')
 				}
 				this.Casteo_Implicito_Heap(vars2,valor);
 			}
 			
 		}
 		catch (err)
 		{
 			console.log('Error Parser elementos '+err)
 		}
 	}
 }
}
function Parametro_Ref(variable,parametro)
{
	var posicion=this.getTemp()
	var valor='';
	if (variable.get_Ambito()=='global')
	{
		valor=this.getTemp();
		this.imprimir(valor+' = Heap['+variable.posicion+'];')
	}
	else{
	var temp = this.getTemp();
	valor=this.getTemp();
	this.imprimir(temp+' = '+this.PActual+' + '+variable.posicion+';')
	this.imprimir(valor+' = Stack['+temp+'];')
	}
    ts.imprimir(posicion+' =  P + '+parametro.posicion+';')
    ts.imprimir('Stack['+posicion+'] = '+valor+';// asignando parametro: '+parametro.nombre)
}
function Imprimir_LLamada_Atributo(padre,atri,inicio,fila,columna)
{
	if(padre.esObjeto())
	{
		var elemento=this.ObtenerElemento(padre.tipo);
		if(elemento.ExisteAtributo2(atri))
		{
			var atributo_def=elemento.getAtributo(atri);
			var temp=this.getTemp()
			this.imprimir(temp+' = '+inicio+' + '+atributo_def.posicion+'; // Posicion de '+atri)
			var temp2=this.getTemp()
			this.imprimir(temp2+' = Heap['+temp+'];')
			var vars= new Variable(atributo_def.nombre,atributo_def.tipo);
			vars.valor=temp2;
			vars.posicion=temp;
			vars.esVar=true;
			vars.ambito.push("global");
			return vars;
		}
		else {
			this.AgregarError(fila,columna,'Error. La definicion de '+elemento.nombre+', no contiene un atributo con nombre: '+atri,'Semántico');
			return null;
		}
	}
	else{
		return null;
		this.AgregarError(fila,columna,'Error se quiso acceder a un atributo de la variable '+padre.nombre+' pero no es un objeto',Semántico)
	}
}
function PopTemporal(id){
   if(isNaN(id))
   {
   	for(var x=0;x<this.temporales.length;x++)
	{
		if(this.temporales[x]==id)
		{
			 this.temporales.splice(x, 1);
		}
	}
   }
}
function getAliasPrincipal()
{
	var arr= new Array();
	var fun = this.Obtener_Funcion('principal',arr);
	if(fun!=null)
	{
		return fun.alias;
	}
	else{
		this.AgregarError(0,0,'Error no encontro el metodo principal','Semántico')
	}
}

function GuardarTemporales(fun)
{
	if(this.Funcion_Actual.alias==fun.alias)
	{
		if(this.temporales.length>0)
		{
			this.imprimir('P = P + '+this.Funcion_Actual.tam+';//Tamanio de '+fun.nombre)
			var temp = this.getTemp();
			for(var x=0;x<this.temporales.length;x++)
			{
				this.imprimir(temp+' = P + '+x+';')
				this.imprimir("Stack["+temp+'] = '+this.temporales[x]+';//Back Up')
			}
			this.imprimir('P = P +'+ this.temporales.length+';//Tamanio del Back Up')
			return true;
		}
		else {
			this.imprimir('P = P + '+this.Funcion_Actual.tam+';')
			return false;
		}
	}
	else {
		this.imprimir('P = P + '+this.Funcion_Actual.tam+';')
			return false;
	}
}
function BackUpTemporales(back)
{
	if(back)
	{
		if(this.temporales.length>0)
		{
			this.imprimir('P = P -'+ this.temporales.length+';//Tamanio del Back Up')
			var temp = this.getTemp();
			for(var x=0;x<this.temporales.length;x++)
			{
				this.imprimir(temp+' = P + '+x+';')
				this.imprimir(this.temporales[x]+' = Stack['+temp+'];//Back Up')
			}
			this.imprimir('P = P - '+this.Funcion_Actual.tam+';')
			return true;
		}
		else {
			this.imprimir('P = P - '+this.Funcion_Actual.tam+';')
			return false;
		}
	}
	else {
		this.imprimir('P = P - '+this.Funcion_Actual.tam+';')
			return false;
	}
}
function Tabla(){ 
	this.tam =0
	this.tamvar=0;
	this.consola=0
	this.vinoRetorno=false;
	this.temp=new Variable('','')
   	this.cont_temp = 137
   	this.cont_met=39
   	this.cont_sentencia=0
   	this.condiciones=new Array();
   	this.ambitos = new Array()
   	this.ambitos.push('global')
   	this.Variables= new Array()
   	this.Funciones = new Array()
   	this.Elementos = new Array()
   	this.retornos = new Array()
   	this.Elementos_Declarados = new Array()
   	this.Errores= new Array()
   	this.Funcion_Actual= null
   	this.ExisteVariable = ExisteVariable 
   	this.AgregarVariable = AgregarVariable
   	this.AgregarFuncion=AgregarFuncion 
   	this.ExisteFuncion=ExisteFuncion
   	this.AgregarElemento=AgregarElemento
   	this.PopElemento=PopElemento
   	this.ExisteElemento=ExisteElemento
   	this.AgregarError=AgregarError
   	this.HayErrores=HayErrores
   	this.PushAmbito=PushAmbito
   	this.PopAmbito=PopAmbito
   	this.Ambito=Ambito
   	this.Escribir=Escribir
   	this.getSentencia=getSentencia
   	this.ExisteAtributo=ExisteAtributo
   	this.AgregarAtributo=AgregarAtributo
   	this.getTemp=getTemp
   	this.getETQ=getETQ
   	this.SistemaTipos=SistemaTipos
   	this.Sistema_Suma=Sistema_Suma
   	this.Sistema_Resta=Sistema_Resta
   	this.Sistema_Potencia=Sistema_Potencia
   	this.Sistema_Division=Sistema_Division
   	this.Sistema_Mod=Sistema_Mod
   	this.Sistema_Mul=Sistema_Mul
   	this.Sistema_Menor=Sistema_Menor
   	this.Sistema_MenorIgual=Sistema_MenorIgual
   	this.Sistema_Mayor=Sistema_Mayor
   	this.Sistema_MayorIgual=Sistema_MayorIgual
   	this.Sistema_Diferente=Sistema_Diferente
   	this.Sistema_Igual=Sistema_Igual
   	this.Imprimir_Relacional=Imprimir_Relacional
   	this.PushCondicion=PushCondicion
   	this.PopCondicion=PopCondicion
   	this.Condicion=Condicion
   	this.Llenar_Variables=Llenar_Variables
   	this.Breaks=new Array()
   	this.Switches=new Array()
   	this.Imprimir_Case=Imprimir_Case
   	this.imprimir=imprimir
   	this.ProcesarCadena=ProcesarCadena
   	this.Continues=new Array()
   	this.inicio_swi=''
   	this.siguiente_swi=''
   	this.whilex_Control=''
   	this.Imprimir_Continue=Imprimir_Continue
   	this.Imprimir_Break=Imprimir_BreaK
   	this.Imprimir_Cadena=Imprimir_Cadena
   	this.Concatenar_Cadena=Concatenar_Cadena
   	this.Definir_Tam=Definir_Tam
   	this.Obtener_Funcion=Obtener_Funcion
   	this.Imprimir_Asginacion=Imprimir_Asginacion
   	this.Buscar_Global=Buscar_Global
   	this.Casteo_Implicito=Casteo_Implicito
   	this.Variable_Busqueda=Variable_Busqueda
   	this.Casteo_Implicito_Heap=Casteo_Implicito_Heap
   	this.Mapeo_Arreglo=Mapeo_Arreglo
   	this.ObtenerElemento=ObtenerElemento
   	this.Crear_Constructor=Crear_Constructor
   	this.Inicializar_Por_Defecto=Inicializar_Por_Defecto
   	this.Parametro_Ref=Parametro_Ref
   	this.globales='';
   	this.glob=false;
   	this.Imprimir_LLamada_Atributo=Imprimir_LLamada_Atributo
   	this.Imprimir_Asginacion_Globales=Imprimir_Asginacion_Globales
   	this.getAliasPrincipal=getAliasPrincipal
   	this.aux_for=''
   	this.inicio_for=''
   	this.temporales= new Array();
   	this.PopTemporal=PopTemporal;
   	this.GuardarTemporales=GuardarTemporales;
   	this.PActual = 0;
   	this.BackUpTemporales=BackUpTemporales
} 

