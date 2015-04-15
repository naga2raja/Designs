(function() {
var storeConfig = function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		controller: 'StoreController',
		templateUrl: 'views/products-list.html',
		controllerAs: 'StreCtrl'
	})
	.when('/product/:id', {
		controller: 'ProductController',
		templateUrl: 'views/product.html',
		controllerAs: 'prodCtrl'
	});
};

var app= angular.module('mystore',['ngRoute','store-directives']).config(storeConfig);	

app.service('sharedProperties', function () {
        var product = [];

        return {
            getProduct: function () {
                return product;
            },
            setProduct: function(value) {			
                product = value;
            }
        };
});

app.controller('StoreController',[ '$http','$rootScope','sharedProperties', function($http,$rootScope,sharedProperties) {
	 var store = this;
	 $rootScope.products = [];
	 store.error = "false";
	 store.item = [];
	 
	 $http.get('data/products.json').success(function(data) {
		$rootScope.products = data;
	 }).error(function() {
		 store.error = "true";
	 });
	 
	 store.showProduct = function(product) {
		sharedProperties.setProduct(product);
	 };
	 store.item = sharedProperties.getProduct();
}]);

app.controller('ProductController',['$scope','$rootScope','$location','$routeParams', function($scope,$rootScope,$location,$routeParams) {
	$scope.product = $rootScope.products[$routeParams.id];
}]);

app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
});
  
    
})();
