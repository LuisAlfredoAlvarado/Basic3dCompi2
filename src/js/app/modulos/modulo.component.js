'use strict';
angular.module('ejecucionCodigo').component('ejecucionCodigo',{
	template: "<div class='container'><div class='row'> <div class='col s12 m8 l6'><br><br><br><br><textarea name='cod2' id='cod2' cols='20' rows='20' style='border: solid 1px rgba(0,0,0,0.2); border-radius: 5px; width: 100%; height: 81%;'>{{codigo}}</textarea></div><div class='col s12 m4 l6'><br><h5> Salidas </h5> <br><textarea name='cod' id='cod' cols='20' rows='20' style='border: solid 1px rgba(0,0,0,0.2); border-radius: 5px; width: 100%; height: 81%;'></textarea></div></div></div>",
	controller: function($routeParams,$scope)
	{
		$scope.someClickText=function()
		{
			console.log("Click")
		}
		
	}
}); 