angular.module("moviedb").controller("AppController", ["$scope", function($scope) {

    // model init
    $scope.model = { // es buena practica tener un objeto para el modelo
        title: ""
    };

    // scope event listeners
    $scope.$on("OnMenuChange", function (evt, data) {
    	$scope.model.title = data;
    });

}]);