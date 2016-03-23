angular.module("moviedb").controller("MovieDetailController",
 ["$scope", "$routeParams", "$location", "MovieService", "paths", function($scope, $routeParams, $location, MovieService, paths) {

    // scope init
    $scope.model = {};
    $scope.uiState = 'loading';

    // controller init
    MovieService.getMovie($routeParams.id)
        .then(
            // película encontrada
            function(movie) {
            	$scope.model = movie;
            	$scope.uiState = 'ideal';
            },
            function(error) {
            	// TODO: improve error management
            	$location.url(paths.notFound);
            }
        )
}])