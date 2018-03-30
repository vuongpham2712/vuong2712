var app = angular.module('facturationApp', []);
app.controller('facturationCtrl', function($scope){
	$scope.modes = [
		{model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
	];
	$scope.dates = ["jours","mois","années"];
	$scope.datesDefault = $scope.dates[0];
	$scope.count = true;
	$scope.myFun = function(){
		$scope.count = false;
	}
	console.log("=======================");
	console.log("=======================");
});