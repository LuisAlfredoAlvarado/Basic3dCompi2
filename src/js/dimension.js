'use strict';
function tam()
{
	return this.limite_sup -this.limite_i;
}
function Dimension(superior){ 
    this.num=0
    this.limite_i=0
   	this.limite_sup=superior
   	this.tam=tam
} 
