'use strict';
function Optimizador(){
	this.Lista_Funciones=new Array();
	this.Valores_Definidos= new Array();
	this.consola=null;
	this.pedaso='';
	this.salton='';
	this.siguiente_a_salto=false;
	this.Optimizar_Funcion=Optimizar_Funcion
	this.Asignacion_OPT=Asignacion_OPT
	this.getValor_OPT=getValor_OPT
	this.Asignar_OPT=Asignar_OPT
	this.getValor_OPTPila=getValor_OPTPila;
	this.Operacion_Aritmetica_OPT=Operacion_Aritmetica_OPT
	this.Exit_Opt=Exit_Opt;
	this.Operacion_Relacional_OPT =Operacion_Relacional_OPT
	this.Asignar_Pila_Optimizar=Asignar_Pila_Optimizar
	this.printf_Optimizar=printf_Optimizar
	this.Limpiar_OPT=Limpiar_OPT
	this.Optimizar_Accion=Optimizar_Accion
	this.LLamada_Metodo_Optimizar=LLamada_Metodo_Optimizar
	this.Existe_Expresion=Existe_Expresion;
	this.imprimir_opt=imprimir_opt;
	this.Agregar_Linea=Agregar_Linea;
	this.lineas_parciales=new Array();
	this.lineas_completas=new Array();
	this.contienePuntero=contienePuntero
	this.Optimizar=Optimizar
	this.Regla17=Regla17
	this.imprimir_lineas=imprimir_lineas
	this.Unir_Lineas=Unir_Lineas
	this.Sigue_Despues_Salto=Sigue_Despues_Salto
}
function Agregar_Linea(str)
{
	this.lineas_parciales.push(str);
}
function Existe_Expresion(exp)
{
    for(var x =0; x<this.Valores_Definidos.length;x++)
    {
    	if(this.Valores_Definidos[x].valor==exp)
    	{
    		return this.Valores_Definidos[x].nombre;
    	}
    }
    return '';
}
function Optimizar(Lista_Fun)
{
	for(var x =0;x<Lista_Fun.length;x++)
	{
		this.Agregar_Linea('void '+Lista_Fun[x].nombre+'(){')
		this.Optimizar_Funcion(Lista_Fun[x].Cuerpo);
		this.Agregar_Linea('}')
		this.Regla17(this.lineas_parciales);
		this.Unir_Lineas(this.lineas_parciales)
		this.lineas_parciales=[]
	}
	this.imprimir_lineas();
}
function imprimir_lineas()
{
	for(var x=0;x<this.lineas_completas.length;x++)
	{
			this.imprimir_opt(this.lineas_completas[x])
	}
}
function Unir_Lineas(arreglo)
{
	for(var x=0;x<arreglo.length;x++)
	{
			this.lineas_completas.push(arreglo[x]);
	}
}
function Regla17(arreglo)
{
	for(var x=0;x<arreglo.length;x++)
	{
		if(arreglo[x].includes('goto'))
		{
			var cade = arreglo[x].split('goto');
			var etiqueta=cade[1].substring(1, cade[1].length-1);
			var sigue = this.Sigue_Despues_Salto(etiqueta,arreglo);
			if(sigue.includes('goto')&&!sigue.includes('if'))
			{
				 var otro_cade = sigue.split('goto');
				 var etiqueta2=otro_cade[1].substring(1, otro_cade[1].length-1);
				 arreglo[x]=cade[0]+'goto '+etiqueta2+';//Antes '+etiqueta;
			}
		}
	}
}
function Sigue_Despues_Salto(etiqueta,arreglo)
{
	for(var x=0;x<arreglo.length;x++)
	{
		if(arreglo[x].includes(etiqueta)&&arreglo[x].includes(':'))
		{
			if(x<arreglo.length-1)
			{
				return arreglo[x+1];
			}
		}
	}
	return '';
}
function Optimizar_Funcion(raiz)
{
	if(raiz.nombre=="Accion")
   	{
   		
        	this.Optimizar_Accion(raiz.Hijos[0])
    }
   else { 
         for (var a = 0; a < raiz.Hijos.length; a++)
        {
         	this.Optimizar_Funcion(raiz.Hijos[a]);
        }
    }
}
function Optimizar_Accion(raiz)
{
	switch(raiz.nombre)
	{
		case 'Salto':
			this.Agregar_Linea('goto '+raiz.token+';')
			break;
		case 'Metodo':
			this.LLamada_Metodo_Optimizar(raiz)
		break;
		case '$$_SGB':
				this.Limpiar_OPT(raiz)
		break;
		case 'Etiquetas':
		      var etiquetas = ''
			for(var x=0;x<raiz.Hijos.length-1;x++)
			{
				etiquetas=etiquetas+raiz.Hijos[x].token+',';
			}
			etiquetas=etiquetas+raiz.Hijos[raiz.Hijos.length-1].token;
			this.Agregar_Linea(etiquetas+':')
		break;
		case 'Asignacion':
			this.Asignacion_OPT(raiz);
			break;
		case 'Salto_Cond':
			var si_Salto=this.Operacion_Relacional_OPT(raiz.Hijos[0])
			this.Agregar_Linea('if ('+si_Salto+') goto '+raiz.Hijos[1].token+';')

		break;
		case 'exit':
				this.Exit_Opt(raiz);
		break;
		case 'Asignacion_Pila':
				this.Asignar_Pila_Optimizar(raiz);
		break;
		case 'printf_Optimizar':
				this.printf_Optimizar(raiz)
		break;
	}
}
function Limpiar_OPT (raiz) {
	var inicio = this.getValor_OPT(raiz.Hijos[0])
	var cant = this.getValor_OPT(raiz.Hijos[1])
	this.Agregar_Linea("$$_SGB("+inicio+','+cant+');')
}
function LLamada_Metodo_Optimizar(raiz)
{
	this.Agregar_Linea(raiz.token+'();')
}
function printf_Optimizar (raiz) {
	var valor=this.getValor_OPT(raiz.Hijos[0]);
	this.Agregar_Linea('printf('+raiz.token+','+valor+');')
}
function Asignar_Pila_Optimizar(raiz)
{
	var vars = raiz.Hijos[0].Hijos[0];
	var pos = raiz.Hijos[0].Hijos[1];
	var valor = raiz.Hijos[1];
	pos=this.getValor_OPT(pos);
	valor=this.getValor_OPT(valor);
	switch(vars.token)
	{	case 'Stack':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			this.Agregar_Linea('Stack['+pos+'] = '+valor+';')
		}
		else {
			this.Agregar_Linea('Stack['+pos+'] = '+existe+';')
		}
		break;
		case 'Heap':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			this.Agregar_Linea('Heap['+pos+'] = '+valor+';')
		}
		else {
			this.Agregar_Linea('Heap['+pos+'] = '+existe+';')
		}
		break;
		case 'Pool':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			this.Agregar_Linea('Pool['+pos+'] = '+valor+';')
		}
		else {
			this.Agregar_Linea('Pool['+pos+'] = '+existe+';')
		}
	}
}
function Exit_Opt(raiz)
{
	switch(Number(raiz.Hijos[0].token))
	{
		case 102:
		this.Agregar_Linea('exit(102);');
		break;
		case 243:
		this.Agregar_Linea('exit(243);');
		break;
		case 396:
		this.Agregar_Linea('exit(396);');
		break;
		case 624:
		this.Agregar_Linea('exit(624);');
		break;
		case 789:
		this.Agregar_Linea('exit(789);');
		break;
		case 801:
		this.Agregar_Linea('exit(801);');
		break;
	}
}
function imprimir_opt(str)
{
	this.consola.value=this.consola.value+str+'\n'
}
function Asignacion_OPT(raiz)
{
	var valor = raiz.Hijos[1];
	if(valor.Hijos.length==0)
	{
		var val=this.getValor_OPT(valor);
		this.Asignar_OPT(raiz.Hijos[0],val);
	}
	else if(valor.Hijos.length==2)
	{
		var val=this.getValor_OPTPila(valor);
		this.Asignar_OPT(raiz.Hijos[0],val);
	}
	else if(valor.Hijos.length==3)
	{
		var val=this.Operacion_Aritmetica_OPT(valor);
		this.Asignar_OPT(raiz.Hijos[0],val);
	}
}
function Asignar_OPT(vars,valor)
{
	switch(vars.nombre)
	{	case 'P':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			this.Agregar_Linea('P = '+valor+';')
		}
		else {
			this.Agregar_Linea('P = '+existe+';')
		}
		break;
		break;
		case 'H':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			this.Agregar_Linea('H = '+valor+';')
		}
		else {
			this.Agregar_Linea('H = '+existe+';')
		}
		break;
		break;
		case 'S':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			this.Agregar_Linea('S = '+valor+';')
		}
		else {
			this.Agregar_Linea('S = '+existe+';')
		}
		break;
		case 'temporal':
		var existe = this.Existe_Expresion(valor);
		if(existe=='')
		{
			if(!this.contienePuntero(valor))
			{
				var variables= new Variable(vars.token,'');
				variables.valor=valor;
				this.Valores_Definidos.push(variables)
			}
			this.Agregar_Linea(vars.token+' = '+valor+';')
		}
		else {
			this.Agregar_Linea(vars.token+' = '+existe+';')
		}
	}
}
function contienePuntero(str)
{
	return str.includes('P')||str.includes('H')||str.includes('S');
}
function getValor_OPT(val)
{
	switch(val.nombre)
	{
		case 'P':
		return 'P';
		case 'H':
		return 'H';
		case 'S':
		return 'S';
		case 'num':
		var num=String(val.token);
		return num;
		case 'temporal':
		return val.token;
	}
}
function getValor_OPTPila(raiz)
{
	var Pila=raiz.Hijos[0];
	var pos = this.getValor_OPT(raiz.Hijos[1]);
	if(Pila.token=='Stack')
	{
		return 'Stack['+pos+']';
	}
	else if(Pila.token=='Heap')
	{
		return 'Heap['+pos+']';
	}
	else
	{
		return 'Pool['+pos+']';
	}
}
function Operacion_Aritmetica_OPT(raiz)
{
	var izq = this.getValor_OPT(raiz.Hijos[0]);
	var op  = raiz.Hijos[1]
	var der = this.getValor_OPT(raiz.Hijos[2]);
	switch(op.token)
	{
		case '+':
		if(izq=='0'&&der!='0')
		{
			return String(der);
		}
		else if(izq!='0'&&der=='0')
		{
			return String(izq);
		}
		else if(izq!='0'&&der!='0')
		{
			return String(izq)+' '+op.token+' '+String(der);
		}
		return '0'
		case '-':
		if(izq!='0'&&der=='0')
		{
			return String(izq);
		}
		else if(izq=='0'&&der=='0')
		{
			return '0';
		}
		else 
		{
			return String(izq)+' '+op.token+' '+String(der);
		}
		case '*':
		if(izq=='1'&&der!='1')
		{
			return String(der);
		}
		else if(izq!='1'&&der=='1')
		{
			return String(izq);
		}
		else if(izq=='0'||der=='0')
		{
			return '0';
		}
		else if(izq=='1'&&der=='1')
		{
			return '1';
		}
		else if(der=='2')
		{
			return String(izq)+' + '+String(izq);
		}
		else if(izq!='1'&&der!='1')
		{
			return String(izq)+' '+op.token+' '+String(der);
		}
		case '/':
		if(der=='1')
		{
			return String(izq);
		}
		else if(izq=='0')
		{
			return '0';
		}
		else {
			return String(izq)+' '+op.token+' '+String(der);
		}
		case '^':
		if(der=='0')
		{
			return '1';
		}
		else if(der=='2')
		{
			return String(izq)+' * '+String(izq);
		}
		else {
			return String(izq)+' '+op.token+' '+String(der);
		}
		case '%':
		return String(izq)+' '+op.token+' '+String(der);
	}
}
function Operacion_Relacional_OPT(raiz)
{
	var izq = this.getValor_OPT(raiz.Hijos[0]);
	var op  = raiz.Hijos[1]
	var der = this.getValor_OPT(raiz.Hijos[2]);
	return String(izq)+' '+String(op.token)+' '+String(der);
}