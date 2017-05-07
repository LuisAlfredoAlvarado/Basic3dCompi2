'use strict';
function imprimir_mensaje()
{
	var men='Error tipo: '+tipo+' Mensaje: '+mensaje+' Posicion('+fila+','+columna+')'
	return men
}
function errores_compi(fila,columna,mensaje,tipo){ 
   	this.fila = fila
   	this.columna = columna
   	this.tipo= tipo
   	this.mensaje=mensaje
   	this.imprimir_mensaje=imprimir_mensaje
}
