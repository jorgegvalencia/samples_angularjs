angular.module("moviedb").controller("SerieDetailController",
 ["$scope", "$routeParams", "$location", "APIClient", "paths", function($scope, $routeParams, $location, APIClient, paths) {

    // scope init
    $scope.model = {};
    $scope.uiState = 'loading';

    // controller init
    $scope.$emit("$changeTitle", "Loading...");
    APIClient.getSerie($routeParams.id)
        .then(
            // película encontrada
            function(serie) {
                $scope.model = serie;
                $scope.uiState = 'ideal';
                $scope.$emit("$changeTitle", $scope.model.title);
            },
            function(error) {
            	// TODO: improve error management
            	$location.url(paths.notFound);
            }
        )
}])