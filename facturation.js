var app = angular.module('facturationApp', []);
app.controller('facturationCtrl', function($scope){
	$scope.modes = {
		card: "1",
		coin: "2"
	}
	$scope.dates1 = ["jours","mois","années"];
	$scope.dates2 = ["jours","mois","années"];
	$scope.datesDefault = $scope.dates1[0];
	$scope.ratios = ["%", "@", "$"];
	$scope.ratiosDefault = $scope.ratios[0];
	$scope.count = true;
	$scope.myFun = function(){
		$scope.count = false;
	}
	$scope.ngayd = new Date();
	console.log("=======================");
	console.log("=======================");
});