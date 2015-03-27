'use strict';
app.controller('homeCtrl', ['$scope','$http', 'loginService', function($scope,$http,loginService){
	var uid = loginService.getuid();
	$scope.username = loginService.getUserName();
	
	var getTotalSalesPerMonth = function () {
 	$http.get('http://localhost:8080/lastyeardata', { params: {sessionid: uid}  }).
		success(function(data) {
				$scope.lastyeardata = data;	
				console.log("Data.data in total sales per month" + data.data);	
				$scope.exampleBarData = [
                {
                    "key": "Total Sales per Month",
                    "values": data.data
                }
            ];
            
            $scope.xbFunction = function(){
                return function(d){
		            return d[0];
                }
            }

            $scope.ybFunction = function(){
                return function(d){
		            return d[1];
                }
            }

	   $scope.toolTipContentFunction = function(){
				return function(key, x, y, e, graph) {
				return  '<p>' +  y + ' Sales on ' + x + ' Month</p>'
			}
		  }
		});
	}

	var getTopSalesOrder = function () {
	$http.get('http://localhost:8080/topsalesorders', { params: {sessionid: uid}  }).
		success(function(data) {
				$scope.topsalesorders = data;											
	   });
	}
	
	var getTopSalesMan = function () {
	$http.get('http://localhost:8080/topsalesmen', { params: {sessionid: uid}  }).
		success(function(data) {
				$scope.topsalesmen = data;											
	});
   }
	
	var getTotalSalesPerSalesMan = function () {
		$http.get('http://localhost:8080/salesmandata', { params: {sessionid: uid}  }).
		success(function(data) {
				$scope.totalsales = data;
				$scope.exampleData1 = [
                {
                    "key": "Total Sales per Sales Man",
                    "values": data.data
                }
            ]
            $scope.exampleData3 = [
                {
                    key: data.data[0][0],
                    y: data.data[0][1]
                },
                {
                    key: data.data[1][0],
                    y: data.data[1][1]
                },
                {
                    key: data.data[2][0],
                    y: data.data[2][1]
                },
                {
                    key: data.data[3][0],
                    y: data.data[3][1]
                },
                {
                    key: data.data[4][0],
                    y: data.data[4][1],
                },
                {
                    key: data.data[5][0],
                    y: data.data[5][1],
                }
            ];
            
            $scope.xFunction = function(){
                return function(d) {
                    return d.key;
                };
            }
            $scope.yFunction = function(){
                return function(d) {
                    return d.y;
                };
            }

			});
	}
	
	/* Calling the Data Request Method for Initial Data display */
	getTotalSalesPerSalesMan();
	getTotalSalesPerMonth();
	getTopSalesOrder();
	getTopSalesMan();
	
	/* Logout function */			  
	$scope.logout=function(){
		$http.get('http://localhost:8080/logout', { params: {sessionid: uid}  }).
		success(function(data) {
			return loginService.logout();										
	 });		
	}
	/* Footer Dialog Boxes */
	$scope.modalShown = false;
	    $scope.toggleModal = function() {
	    $scope.modalShown = !$scope.modalShown;
	}
	$scope.modalShowns = false;
	    $scope.toggleModals = function() {
	    $scope.modalShowns = !$scope.modalShowns;
  	}
	$scope.modalShownt = false;
	    $scope.toggleModalt = function() {
	    $scope.modalShownt = !$scope.modalShownt;
  	}
	$scope.clicked = function(){
        alert("Request is sent successfully");
        $scope.modalShowns = !$scope.modalShowns;
    }
    $scope.closeSubDialog = function(){
        $scope.modalShowns = !$scope.modalShowns;
    }
    /* Reload functions */
    $scope.reload_pie_chart = function(){
		return getTotalSalesPerSalesMan();
    }
    $scope.reload_bar_chart = function(){
		return getTotalSalesPerMonth();
    }
    $scope.reload_topsales = function(){
		return getTopSalesOrder();
    }
    $scope.reload_topsalesman = function(){
		return getTopSalesMan();
    }  
}]);

