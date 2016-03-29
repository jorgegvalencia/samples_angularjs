angular.module("moviedb").controller("MovieFormController", ["$scope", "APIClient", function ($scope, APIClient) {
	
	// Scope init
	$scope.model = {};
	$scope.successMessage = null;	
	$scope.errorMessage = null;	

	// Scope methods
	$scope.saveMovie = function () {
		APIClient.createMovie($scope.model)
			.then(
				function (movie) {
					$scope.successMessage = "Movie saved! <a href=\"#/movies/" + movie.id +"\">View new movie detail</a>"
					$scope.model = {};
					$scope.movieForm.$setPristine();
				},
				function (error) {
					$scope.successMessage = "Fatal erro The end is near.";
				}
			);
	}
}])