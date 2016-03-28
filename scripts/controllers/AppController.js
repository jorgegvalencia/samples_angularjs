angular.module("moviedb").controller("AppController", ["$scope", "$location", "paths", function($scope, $location, paths) {
	var controller = this;

	// controller properties
	controller.titles = {};
	controller.titles[paths.movies] = "Movies List";
	controller.titles[paths.series] = "Series List";
	controller.titles[paths.people] = "People List";	

    // model init
    $scope.model = { // es buena practica tener un objeto para el modelo
        title: ""
    };

    // scope event listeners
    $scope.$on("$locationChangeSuccess", function (evt, currentRoute) {
    	$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
    });

    $scope.$on("$changeTitle", function (evt, title) {
        $scope.model.title = title;
    })

}]);