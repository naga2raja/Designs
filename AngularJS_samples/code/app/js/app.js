'use strict';
// Declare app level module which depends on filters, and services
var app= angular.module('myApp', ['ngRoute','nvd3ChartDirectives']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

/* To prevent the users from directly accessing /home */
app.run(function($rootScope, $location, loginService){
	var routespermission=['/home'];  //route that require login
	$rootScope.$on('$routeChangeStart', function(){
		if( routespermission.indexOf($location.path()) !=-1 && !loginService.islogged() )
		{
				$location.path('/login');
		}
	});
});
