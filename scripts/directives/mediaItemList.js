angular.module("moviedb").directive("mediaItemList", function () {
	return {
		restrict: 'AE',
		scope: { // modelo aislado salvo:
			model: "=items",
			getDetailUrl: "&" // hay que pasar la llamada al metodo y no la referencia
		},
		templateUrl: 'views/mediaItemList.html'
	};
})