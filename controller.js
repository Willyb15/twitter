var twitterApp = angular.module('twitterApp', []);
twitterApp.controller('twitterController', function($scope, $http){

	
	var twitterURL = 'http://www.digitalcrafts.com/students/twitter/hashtag.php?hash=kanyewest';
		
	$scope.tweetPath = "#kanyewest";
		
	$http({
		method: 'GET',
		url: twitterURL,
	}).then(function(tweetData){
		for( var i=0; i<tweetData.data.statuses.length;i++){
		$scope.tweetData = tweetData.data.statuses[i].text;
		console.log($scope.tweetData);
		console.log(typeof(tweetData));
	}
	
			
	}, function(tweetData){
		console.log('There was an  error!!');
	});
			
}); 		