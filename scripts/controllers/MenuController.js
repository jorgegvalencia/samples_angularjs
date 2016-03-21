angular.module("moviedb").controller("MenuController", ["$scope", function($scope) {

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

    // watchers del scope
    $scope.$watch("model.selectedItem", function(newValue, oldValue) {
        $scope.$emit("OnMenuChange", newValue);
    });
}]);