angular.module("moviedb").controller("MenuController", ["$scope", "$location", function($scope, $location) {
    // inicializar el scope
    // atributo con nombre model
    $scope.model = {
        selectedItem: "movies"
    };

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