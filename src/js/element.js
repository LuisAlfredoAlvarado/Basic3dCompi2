'use strict';
function setAtributos(Atributos)
{
  this.atributos=Atributos;
}
function Escribir_Atributos()
{
  for(var x=0;x<this.atributos.length;x++)
  {
    document.write('Parametro: '+this.atributos[x].nombre+',  Tipo: '+this.atributos[x].tipo+', Valor '+this.atributos[x].valor+', Posicion: '+this.atributos[x].posicion+'<br>');
  }
}

function ExisteAtributo2(id)
{
  for(var x=0; x < this.atributos.length ; x++)
  {
    if(this.atributos[x].nombre==id)
    {
      return true;
    }
  }
  return false;
}
function definir_tam2()
{
  for(var x=0;x<this.atributos.length;x++)
  {
    if(this.atributos[x].tipo.includes("Arreglo"))
    {
       this.atributos[x].posicion=this.tam
       this.tam=this.tam+this.atributos[x].Length_Arreglo()
    }
    else{
      this.atributos[x].posicion=this.tam
      this.tam=this.tam+1
    }
  }
}
function getAtributo(id)
{
  for(var x=0; x < this.atributos.length ; x++)
  {
    if(this.atributos[x].nombre==id)
    {
      return this.atributos[x];
    }
  }
}
function Elemento(id){ 
   	this.nombre = id
    this.tam=0;
   	this.atributos =  new Array()
   	this.setAtributos=setAtributos
    this.ExisteAtributo2=ExisteAtributo2
    this.Escribir_Atributos=Escribir_Atributos
    this.definir_tam2=definir_tam2
    this.getAtributo=getAtributo
}