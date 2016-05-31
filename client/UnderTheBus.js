var UnderTheBus = angular.module('UnderTheBus', ['ui.router']);

UnderTheBus.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/viewMap');

		$stateProvider
				.state('viewMap', {
						url: '/viewMap',
						templateUrl: 'viewMap.html',
						controller: 'mapController'
				});
});

UnderTheBus.controller('mapController', ['$scope', 'MapFactory', function($scope, MapFactory){
		$scope.data = [];
}]);


UnderTheBus.factory('MapFactory', ['$http', function($http){
	return {};
}]);

