var UnderTheBus = angular.module('UnderTheBus', ['ui.router'])

		.directive('map', function ($parse) {
		return {
				restrict: 'E',
				replace: true,
				template: '<div id="map"></div>',
				link: function (scope, element, attrs) {

					var width = 900,
							height = 600;

					var svg = d3.select("body").append("svg")
								.attr("width", width)
								.attr("height", height);

					var projection = d3.geo.mercator()
								.center([-122.433701, 37.767683])
								.scale(200000)
								.translate([width / 2, height / 2]);

					var path = d3.geo.path()
								.projection(projection);

					d3.json('./sfmaps/streets.json', function(arteries){
						svg.selectAll("path")
							.data(arteries.features)
							.enter()
							.append("path")
							.attr("d", path)
							.attr("class", "hippy");
					});

				}
			};
		});


UnderTheBus.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/viewMap');

		$stateProvider
				.state('viewMap', {
						url: '/viewMap',
						templateUrl: './viewMap.html',
						controller: 'mapController'
				});
});

UnderTheBus.controller('mapController', ['$scope', 'MapFactory', function($scope, MapFactory){
	$scope.data = [];
  console.log('Data from NextBus: ', MapFactory.getLocs());
}]);


UnderTheBus.factory('MapFactory', ['$http', function($http){
	return {
		getLocs: function(){
			return $http.get('http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=sf-muni')
				.then(function(res){
					var extracted = {};
					var parser = new DOMParser();
					var xmlDoc = parser.parseFromString(res.data, "text/xml");
					// documentElement always represents the root node
					var x = xmlDoc.documentElement.childNodes;
					for (var i = 0; i < x.length; i++){
						// set id to vehicle id
						if (x[i].attributes && x[i].attributes[3]){
							var vehicle = x[i].attributes;
//							console.log(vehicle);
							// 3 = lat, 4 = lon
							extracted[vehicle[0].nodeValue] = [vehicle[3].nodeValue, vehicle[4].nodeValue];
							console.log(extracted[vehicle[0].nodeValue]);
						}
					}
			});
		}
	};
}]);
