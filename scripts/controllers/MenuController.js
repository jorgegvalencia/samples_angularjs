angular.module("moviedb").controller("MenuController", ["$scope", "$location", "paths", function($scope, $location, paths) {
    // inicializar el scope
    // atributo con nombre model
    $scope.model = {
        selectedItem: paths.movies
    };
    $scope.paths = paths;

    // metodos del scope
    $scope.setSelectedItem = function(item) {
        $scope.model.selectedItem = item;
    }

    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item) {
            return "active";
        } else {
            return "";
        }
    }

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
        $scope.model.selectedItem = $location.path();
    });
}]);