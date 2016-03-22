angular.module("moviedb").controller("MoviesListController", ["$scope", "$log", "MovieService", function($scope, $log, MovieService) {

    // scope init

    $scope.uiState = 'loading';
    $scope.model = [];

    // Controller start
    $scope.uiState = 'loading';
    MovieService.getMovies()
        .then(
            // promesa resuelta
            function(response) {
                $log.log("SUCCESS", response.data);
                $scope.model = response.data;
                if ($scope.model.length == 0) {
                    $scope.uiState = 'blank';
                } 
                else {
                    $scope.uiState = 'ideal';
                }
            },
            // promesa rechazada
            function(response) {
                $log.error("ERROR", response.data);
                $scope.uiState = 'error';
            }
        );
}]);