var app = angular.module('facturationApp', []);
app.controller('facturationCtrl', function($scope){
	$scope.modes = [
		{model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
	];
	// $scope.selectDate = $scope.dates[0];
	$scope.dates = ["jours","mois","années"];
	$scope.changes = "false";
	$scope.onChangeMode = function(){

	}
});
