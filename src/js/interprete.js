'use strict';
function Interpretre(){
	this.Lista_Funciones=new Array();
	this.Lista_Temporales=new Array();
	this.Stack = new Array();
	this.Heap = new Array();
	this.Pool = new Array();
	this.H=0;
	this.P=0;
	this.S=0;
	this.puedo=true;
	this.etq='';
	this.Cuerpo_Actual=new Array();
	this.Ejecutar = Ejecutar
	this.getFun = getFun
	this.Ejecutar_Funcion=Ejecutar_Funcion
	this.Asignacion=Asignacion
	this.getValor=getValor
	this.Asignar=Asignar
	this.getValorPila=getValorPila;
	this.Operacion_Aritmetica=Operacion_Aritmetica
	this.Exit=Exit;
	this.Operacion_Relacional =Operacion_Relacional
	this.Asignar_Pila=Asignar_Pila
	this.printf=printf
	this.Limpiar_Stack=Limpiar_Stack
	this.core=''
	this.Ejecutar_Accion=Ejecutar_Accion
	this.Llamada_Metodo=Llamada_Metodo
}
function Ejecutar(Lista_Fun)
{
	this.Lista_Funciones=Lista_Fun;
	var init = this.getFun('init');
	this.Cuerpo_Actual.push(init.Cuerpo);
	this.Ejecutar_Funcion(init.Cuerpo);
}
function getFun(id){
 for(var x=0;x<this.Lista_Funciones.length;x++)
 {
 	if(this.Lista_Funciones[x].nombre==id)
 	{
 		return this.Lista_Funciones[x];
 	}
 }
}
function Ejecutar_Funcion(raiz)
{
	if(raiz.nombre=="Accion")
   	{
   		if(this.puedo){
        	var ret=this.Ejecutar_Accion(raiz.Hijos[0])
        	if(ret=='fin')
        	{
        	return 'fin';
        	}
    	}
    	else {
    		var raiz_hija =raiz.Hijos[0];
    		if(raiz_hija.nombre=='Etiquetas')
    		{
    			for(var x=0;x<raiz_hija.Hijos.length;x++)
				{
					if(raiz_hija.Hijos[x].token==this.etq)
					{
						this.puedo=true;
						this.etq='';
					}
				}
    		}
    	}
    }
   else { 
         for (var a = 0; a < raiz.Hijos.length; a++)
        {
         	var ret=this.Ejecutar_Funcion(raiz.Hijos[a]);
         	if(ret=='fin')
        	{
        	return 'fin';
        	}
        }
    }
}
function Ejecutar_Accion(raiz)
{
	switch(raiz.nombre)
	{
		case 'Salto':
			this.etq=raiz.token;
			this.puedo=false;
			raiz=null;
			this.Ejecutar_Funcion(this.Cuerpo_Actual[this.Cuerpo_Actual.length-1])
			return 'fin';
		break;
		case 'Metodo':
			this.Llamada_Metodo(raiz)
		break;
		case '$$_SGB':
				this.Limpiar_Stack(raiz)
		break;
		case 'Etiquetas':
			for(var x=0;x<raiz.Hijos.length;x++)
			{
				if(raiz.Hijos[x].token==this.etq)
				{
					this.puedo=true;
					this.etq='';
				}
			}
		break;
		case 'Asignacion':
			this.Asignacion(raiz);
			break;
		case 'Salto_Cond':
			var si_Salto=this.Operacion_Relacional(raiz.Hijos[0])
			if(si_Salto)
			{
			this.etq=raiz.Hijos[1].token;
			this.puedo=false;
			this.Ejecutar_Funcion(this.Cuerpo_Actual[this.Cuerpo_Actual.length-1])
			return 'fin';
			}
		break;
		case 'exit':
				this.Exit(raiz);
		break;
		case 'Asignacion_Pila':
				this.Asignar_Pila(raiz);
		break;
		case 'printf':
				this.printf(raiz)
		break;
	}
}
function Limpiar_Stack (raiz) {
	var inicio=this.getValor(raiz.Hijos[0])
	var cant=this.getValor(raiz.Hijos[1])
	for(var x=0;x<cant;x++)
	{
		this.Stack[inicio+x]=-201403799;
	}
}
function Llamada_Metodo(raiz)
{
	if(raiz.token=='$$_show')
	{
	   var result='';
       var pos=this.Stack[this.P+1];
       var valor=this.Pool[pos];
       while(valor!=0&&valor==valor)
       {
       	 result=result+String.fromCharCode(valor);
       	 pos=pos+1;
       	 valor=this.Pool[pos];
       }
       alert(result)
	}
	else if(raiz.token=='$$_inStr')
	{
	   var result='';
       var pos=this.Stack[this.P+2];
       var valor=this.Pool[pos];
       while(valor!=0&&valor==valor)
       {
       	 result=result+String.fromCharCode(valor);
       	 pos=pos+1;
       	 valor=this.Pool[pos];
       }
      var texto = prompt(result, '');
      var Puntero_Pool = this.S;
      if(texto!=null)
      {
      	 for(var x =0;x<texto.length;x++)
      	 {
      	 	this.Pool[this.S] = texto.charCodeAt(x);
      	 	this.S = this.S + 1;
      	 }
      	 this.Pool[this.S] = 0;
      	 this.S = this.S + 1;
      	 var Hea = this.Stack[this.P+1];
      	 this.Heap[Hea] = Puntero_Pool;
      }
	}
	else if(raiz.token=='$$_inNum')
	{
	   var result='';
       var pos=this.Stack[this.P+1];
       var valor=this.Pool[pos];
       while(valor!=0&&valor==valor)
       {
       	 result=result+String.fromCharCode(valor);
       	 pos=pos+1;
       	 valor=this.Pool[pos];
       }
      var texto = prompt(result, '');
      var Puntero_Pool = this.S;
      if(!isNaN(texto))
      {
      	 this.Stack[this.P] = Number(texto);
      }
      else{
      	 this.Stack[this.P] = this.Stack[this.P+2];
      }
	}
	else{
	var met = this.getFun(raiz.token);
	this.Cuerpo_Actual.push(met.Cuerpo);
	var ret =this.Ejecutar_Funcion(met.Cuerpo);
	this.Cuerpo_Actual.pop();
	}
}
function printf (raiz) {
	var valor=this.getValor(raiz.Hijos[0]);
	valor=Number(valor)
	if(raiz.token=='%f')
	{
		console.log(valor)
	}
	else if(raiz.token=='%d')
	{
		valor=valor-(valor%1)
		console.log(valor)
	}
	else{
		var res = String.fromCharCode(valor);
		console.log(res);
	}
}
function Asignar_Pila(raiz)
{
	var vars = raiz.Hijos[0].Hijos[0];
	var pos = raiz.Hijos[0].Hijos[1];
	var valor = raiz.Hijos[1];
	pos=this.getValor(pos);
	valor=this.getValor(valor);
	switch(vars.token)
	{	case 'Stack':
		this.Stack[pos]=valor;
		break;
		case 'Heap':
		this.Heap[pos]=valor;
		break;
		case 'Pool':
		this.Pool[pos]=valor;
	}
}
function Exit(raiz)
{
	switch(Number(raiz.Hijos[0].token))
	{
		case 102:
		alert('NullPointerException');
		throw "NullPointerException"
		break;
		case 243:
		alert('MissingReturnStatement');
		throw "MissingReturnStatement"
		break;
		case 396:
		alert('ArithmeticException');
		throw "ArithmeticException"
		break;
		case 624:
		alert('StackOverFlowException');
		throw "StackOverFlowException"
		break;
		case 789:
		alert('HeapOverFlowException');
		throw "HeapOverFlowException"
		break;
		case 801:
		alert('PoolOverFlowException');
		throw "PoolOverFlowException"
		break;
	}
}
function Asignacion(raiz)
{
	var valor = raiz.Hijos[1];
	if(valor.Hijos.length==0)
	{
		var val=this.getValor(valor);
		this.Asignar(raiz.Hijos[0],val);
	}
	else if(valor.Hijos.length==2)
	{
		var val=this.getValorPila(valor);
		this.Asignar(raiz.Hijos[0],val);
	}
	else if(valor.Hijos.length==3)
	{
		var val=this.Operacion_Aritmetica(valor);
		this.Asignar(raiz.Hijos[0],val);
	}
}
function Asignar(vars,valor)
{
	switch(vars.nombre)
	{	case 'P':
		this.P=valor;
		break;
		case 'H':
		this.H=valor;
		break;
		case 'S':
		this.S=valor;
		break;
		case 'temporal':
		var pos = vars.token.substring(1, vars.token.length);
		this.Lista_Temporales[pos]=valor;
	}
}
function getValor(val)
{
	switch(val.nombre)
	{
		case 'P':
		return this.P;
		case 'H':
		return this.H;
		case 'S':
		return this.S;
		case 'num':
		var num=Number(val.token);
		return num;
		case 'temporal':
		var pos = val.token.substring(1, val.token.length);
		return this.Lista_Temporales[pos];
	}
}
function getValorPila(raiz)
{
	var Pila=raiz.Hijos[0];
	var pos = this.getValor(raiz.Hijos[1]);
	if(Pila.token=='Stack')
	{
		return this.Stack[pos];
	}
	else if(Pila.token=='Heap')
	{
		return this.Heap[pos];
	}
	else
	{
		return this.Pool[pos];
	}
}
function Operacion_Aritmetica(raiz)
{
	var izq = this.getValor(raiz.Hijos[0]);
	var op  = raiz.Hijos[1]
	var der = this.getValor(raiz.Hijos[2]);
	switch(op.token)
	{
		case '+':
		return izq + der;
		case '-':
		return izq - der;
		case '*':
		return izq * der;
		case '/':
		return izq / der;
		case '^':
		return Math.pow(izq, der);
		case '%':
		return izq%der;
	}
}
function Operacion_Relacional(raiz)
{
	var izq = this.getValor(raiz.Hijos[0]);
	var op  = raiz.Hijos[1]
	var der = this.getValor(raiz.Hijos[2]);
	izq=Number(izq);
	der=Number(der)
	switch(op.token)
	{
		case '<':
		return izq < der;
		case '>':
		return izq > der;
		case '<=':
		return izq <= der;
		case '>=':
		return izq >= der;
		case '==':
		return izq==der;
		case '!=':
		return izq!=der;
	}
}