'use strict';

app.controller('loginCtrl', ['$scope','loginService', function ($scope,loginService) {
	$scope.msgtxt='';
	$scope.invalidLogin = false;
	$scope.login=function(data){
		loginService.login(data,$scope); //call login service
		$scope.invalidLogin = true;
	};
	/* Footer Dialog Boxes */
	$scope.modalShown = false;
	    $scope.toggleModal = function() {
	    $scope.modalShown = !$scope.modalShown;
	};
	$scope.modalShowns = false;
	    $scope.toggleModals = function() {
	    $scope.modalShowns = !$scope.modalShowns;
  	};
	$scope.modalShownt = false;
	    $scope.toggleModalt = function() {
	    $scope.modalShownt = !$scope.modalShownt;
  	};
	$scope.clicked = function(){
        alert("Request is sent successfully");
        $scope.modalShowns = !$scope.modalShowns;
    	};
    	$scope.closeSubDialog = function(){
        $scope.modalShowns = !$scope.modalShowns;
    	};
}]);
