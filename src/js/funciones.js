'use strict';
function Funcion(id,tipo){ 
   	this.nombre = id
   	this.tipo =  tipo
    this.tam=1
    this.alias=''
   	this.parametros = new Array()
    this.variables= new Array()
   	this.setParametros=setParametros
   	this.ParametrosIguales=ParametrosIguales
   	this.Escribir_Parametros=Escribir_Parametros
    this.Agregar_Parametro=Agregar_Parametro
    this.definir_tam=definir_tam
    this.get_Var=get_Var
    this.Cuerpo=null;
}
function get_Var(id,ambito)
{
   for(var x=0;x<this.parametros.length;x++)
   {
        if(this.parametros[x].nombre==id&&this.parametros[x].Comprobar_Ambito(ambito))
          {
            return this.parametros[x];
          }
   }
   for(var x=0;x<this.variables.length;x++)
   {
      if(this.variables[x].nombre==id&&this.variables[x].Comprobar_Ambito(ambito))
      {
       return this.variables[x];
      }
   }
   return null;
}
function definir_tam()
{
  for(var x=0;x<this.parametros.length;x++)
  {
     this.parametros[x].ambito.push(this.nombre)
    if(this.parametros[x].tipo.includes("Arreglo"))
    {
       this.parametros[x].posicion=this.tam
       this.tam=this.tam+1
       this.parametros[x].tamarreglo=this.parametros[x].Length_Arreglo()
    }
    else{
      this.parametros[x].posicion=this.tam
      this.tam=this.tam+1
    }
  }
  for(var x=0;x<this.variables.length;x++)
  {
    if(this.variables[x].tipo.includes("Arreglo"))
    {
       this.variables[x].posicion=this.tam
       this.tam=this.tam+1
       this.variables[x].tamarreglo=this.variables[x].Length_Arreglo()
    }
    else{
      this.variables[x].posicion=this.tam
      this.tam=this.tam+1
    }
  }
}
function setParametros(Parametros)
{
	this.parametros=Parametros;
}
function ParametrosIguales(Parametros)
{
	if(this.parametros.length==Parametros.length)
	{
       for(var x=0;x<Parametros.length;x++)
       {
       	 if(this.parametros[x].tipo!=Parametros[x].tipo)
       	 {
             return false
       	 }
          else {
          if(this.parametros[x].tipo.includes("Arreglo"))
          {
             var bol =this.parametros.Comparar_Dimensiones(this.parametros.dimensiones,Parametros.dimensiones)
             if(bol)
             {
                return true;
             }
          }
          }
       }
       return true;
	}
	return false
}
function Escribir_Parametros()
{
	for(var x=0;x<this.parametros.length;x++)
	{
		document.write('Parametro: '+this.parametros[x].nombre+'.  Tipo: '+this.parametros[x].tipo+', ref: '+this.parametros[x].valor+'<br>');
	}
}
function Agregar_Parametro(lista)
{
    this.variables.push(lista);
}
