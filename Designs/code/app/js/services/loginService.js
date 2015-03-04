'use strict';
app.factory('loginService',function($http, $location, sessionService){
	return{
		
		login:function(data,scope){
			$http.get('http://localhost:8080/login', { params: {username: data.name, password:data.pass}  }).
							success(function(data) {
										var uid=data.sessionId;
										//console.log("Session Id" + uid);
										//console.log("Login Succeded" + data.loginSucceeded);
										if(data.loginSucceeded === true)
										{	
											scope.msgtxt='Authentication Success';
											sessionService.set('uid',uid);
											$location.path('/home');
										} else {
											scope.msgtxt='Invalid Username or Password !!!';
											$location.path('/login');
										}
										
								}).
							error(function(data) {
									scope.msgtxt='Unable to Connect to the Backend';
							  });
			sessionService.setUname('user',data.name);										
					  
		},
		logout:function(){
			sessionService.destroy('uid');
			$location.path('/login');
		},
		islogged:function(){
			if(sessionService.get('uid')) return true;
			else return false;
			
		},
		getuid:function(){
			if(sessionService.get('uid')) return sessionService.get('uid');
			else return false;
		},
		getUserName:function(){
			return sessionService.getUname('user');	
		}
	}

});
