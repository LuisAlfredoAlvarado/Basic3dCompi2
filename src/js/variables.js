'use strict';
function Escribir_Dimensiones()
{
	for(var x=0;x<this.dimensiones.length;x++)
	{
		document.write('Dim: '+this.dimensiones[x].num+'. Limite Inferior: '+this.dimensiones[x].limite_i+', Limite_Superior: '+this.dimensiones[x].limite_sup+'<br>');
	}
}
function Escribir_Ambito()
{
	for(var x=0;x<this.ambito.length;x++)
	{
		document.write(x+': '+this.ambito[x]);
	}
}
function Agregar_Dimension(dim)
{
	this.dimensiones.push(dim)
}
function Agregar_Tam(dim)
{
	if(this.dimensiones.length>0)
	{
		this.dimensiones[this.dimensiones.length-1].num=dim
	}
}
function Obtener_Dimension()
{
	if(this.dimensiones.length>0)
	{
		return this.dimensiones[this.dimensiones.length-1];
	}
}
function Comparar_Dimensiones(dim1,dim2)
{
   if(dim1.length==dim2.length)
   {
     for(var x;x<dim2.length;x++)
     {
     	if(dim1[x].tam()!=dim2[x].tam())
     	{
     		return false;
     	}
     }
     return true;
   }
   return false;
}
function Length_Arreglo()
{
	var num=1;
	for(var x=0;x<this.dimensiones.length;x++)
	{
		num=num*this.dimensiones[x].tam()
	}
	return num;
}
function get_Ambito()
{
	return this.ambito[this.ambito.length-1]
}
function Comprobar_Ambito(amb)
{
  for(var x=0;x<this.ambito.length;x++)
  {
    for(var y=amb.length-1;y>=0;y--)
    {
      if(this.ambito[x]==amb[y])
      {
      return true;
      }
    }
  }
  return false;
}
function posicionarr(entero)
{
  var pos=1;
  if(entero<this.dimensiones.length)
  { for(var x=0;x!=entero;x++)
    {
      pos=pos*this.dimensiones[x].tam()
    }
  }
  else{
    pos=0;
  }
  return pos;
}
function getTipoReal()
{
  if(this.tipo.includes('num'))
  {
    return 'num'
  }
  else if(this.tipo.includes('str'))
  {
    return 'str'
  }
  else {
    return 'bool'
  }
}
function esObjeto()
{
  if(this.tipo=='num' || this.tipo=='bool'||this.tipo=='str'||this.tipo.includes('Arreglo'))
  {
    return false;
  }
  return true;
}
function copiar(vars)
{
  vars.posicion=this.posicion;
  vars.ambito= this.ambito;
  vars.dimensiones=this.dimensiones
  vars.tamarreglo=this.tamarreglo
  vars.esObjeto=this.esObjeto
}
function Variable(id,tipo){ 
    this.Comprobar_Ambito=Comprobar_Ambito
   	this.nombre = id
   	this.ambito = new Array()
   	this.valor = ''
   	this.linea=''
   	this.columna=''
   	this.esVar=false;
   	this.tipo =  tipo
   	this.posicion=0
   	this.dimensiones = new Array()
   	this.Agregar_Dimension=Agregar_Dimension
   	this.Agregar_Tam=Agregar_Tam
   	this.Escribir_Dimensiones=Escribir_Dimensiones
   	this.Obtener_Dimension=Obtener_Dimension
   	this.Escribir_Ambito=Escribir_Ambito
   	this.Comparar_Dimensiones=Comparar_Dimensiones
   	this.Length_Arreglo=Length_Arreglo
   	this.get_Ambito=get_Ambito
    this.posicionarr=posicionarr
    this.getTipoReal=getTipoReal
    this.tamarreglo=0
    this.esObjeto=esObjeto
    this.copiar=copiar
} 
