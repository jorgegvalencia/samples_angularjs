angular.module("moviedb").controller("MovieDetailController",
 ["$scope", "$routeParams", "$location", "APIClient", "paths", function($scope, $routeParams, $location, APIClient, paths) {

    // scope init
    $scope.model = {};
    $scope.uiState = 'loading';

    // controller init
    $scope.$emit("$changeTitle", "Loading...");
    APIClient.getMovie($routeParams.id)
        .then(
            // película encontrada
            function(movie) {
                $scope.model = movie;
                $scope.uiState = 'ideal';
                $scope.$emit("$changeTitle", $scope.model.title);
            },
            function(error) {
            	// TODO: improve error management
            	$location.url(paths.notFound);
            }
        )
}])