var twitterApp = angular.module('twitterApp', ['ngRoute']);
twitterApp.controller('mainController', function($scope, $http, $routeParams, $interval){
	$scope.message = "Hello World";
	var twitterURL = 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=kanyewest'; 	
	// http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=realdonaldtrump url for user
	// 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=kanyewest';	url for trending
				
	$http.get(twitterURL).success(function(data){
		console.log(data);
		$scope.data = data.statuses;
		for (i=0; i<$scope.data.length; i++){
			var time = $scope.data[i].created_at;
			var tweetTime = new Date(time);
			// console.log(tweetTime);
			// console.log(typeof(tweetTime));
			$scope.data[i].tweetSeconds = tweetTime.getTime()/1000;
			console.log($scope.data[i].tweetSeconds);

			$interval(function(){
				for(i=0; i<$scope.data.length; i++){
					var currentDate = new Date();
					var currentTimeInSeconds = currentDate.getTime()/1000;
					$scope.data[i].sinceTweeted = Math.floor(currentTimeInSeconds -$scope.data[i].tweetSeconds);
				} 
			}, 1000);

		}
	});

	$scope.submit = function(){
		event.preventDefault();
		console.log($scope.text);
		searchInput = $scope.text;
		var searchURL = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=' + searchInput;
		$http.get(searchURL).success(function(data){
		console.log(data);
		$scope.data = data.statuses;
		for (i=0; i<$scope.data.length; i++){
			var time = $scope.data[i].created_at;
			var tweetTime = new Date(time);
			// console.log(tweetTime);
			// console.log(typeof(tweetTime));
			$scope.data[i].tweetSeconds = tweetTime.getTime()/1000;
			console.log($scope.data[i].tweetSeconds);

			$interval(function(){
				for(i=0; i<$scope.data.length; i++){
					var currentDate = new Date();
					var currentTimeInSeconds = currentDate.getTime()/1000;
					$scope.data[i].sinceTweeted = Math.floor(currentTimeInSeconds -$scope.data[i].tweetSeconds);
				} 
			}, 1000);

		}
	});
	};
});
