

var UnderTheBus = angular.module('UnderTheBus', ['ui.router'])
/*
		.directive('map', function ($parse) {
		return {
				restrict: 'E',
				replace: true,
				template: '<div id="map"></div>',
				link: function (scope, element, attrs) {



					var width = 900,
							height = 600;

					var projection = d3.geo.albers()
								.center([0, 55.4])
								.rotate([4.4, 0])
								.parallels([50, 60])
								.scale(6000)
								.translate([width / 2, height / 2]);

					var svg = d3.select("body").append("svg")
								.attr("width", width)
								.attr("height", height);

					var path = d3.geo.path().projection(projection);

					var g = svg.append("g");

					console.log('getting here');

				d3.json("./sfmaps/world-110m2.json", function(error, topology) {
						console.log(topology);
						g.selectAll("path")
							.data(topojson.feature(topology, topology.objects.countries))
						.attr('d', d3.geo.path().projection(projection))
					});

/*
					d3.json("./sfmaps/arteries.json", function(error, arteries) {
						if (error) return console.error(error);
						console.log('arteries: ', arteries);

						svg.append("path")
							.datum(topojson.feature(arteries, arteries.features))
							.attr("d", d3.geo.path().projection(d3.geo.mercator()
																									.scale(500)
																									.translate([width / 2, height / 2])
																								 ));




					}); 
				} 
			};
		}); */



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
}]);


UnderTheBus.factory('MapFactory', ['$http', function($http){
	return {};
}]);
