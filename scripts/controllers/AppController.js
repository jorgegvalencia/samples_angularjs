angular.module("moviedb").controller("AppController", ["$scope", "$location", function($scope, $location) {
	var controller = this;

	// controller properties
	this.titles = {
		"/movies": "Movies List",
		"/series": "Series List",
		"/people": "People List"
	}

    // model init
    $scope.model = { // es buena practica tener un objeto para el modelo
        title: ""
    };

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function (evt, currentRoute) {
    	$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
    });

}]);