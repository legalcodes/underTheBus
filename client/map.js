var width = 960,
    height = 1160;

var svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height);

d3.json("./sfmaps/arteries.json", function(error, arteries) {
  if (error) return console.error(error);
  console.log('arteries: ', arteries);

	svg.append("path")
    .datum(arteries)
		.attr("d", d3.geo.path().projection(d3.geo.mercator()));

/*
	svg.append("path")
    .datum(topojson.feature(arteries, arteries.features))
    .attr("d", d3.geo.path().projection(d3.geo.mercator()));
*/

});

/*
d3.json("./sfmaps/freeways.json", function(error, freeways) {
  if (error) return console.error(error);
  console.log('freeways: ', freeways);
});

d3.json("./sfmaps/neighborhoods.json", function(error, neighborhoods) {
  if (error) return console.error(error);
  console.log('neighborhoods: ', neighborhoods);
});

d3.json("./sfmaps/streets.json", function(error, streets) {
  if (error) return console.error(error);
  console.log('streets: ', streets);
});
*/


/*
var width = 900;
var height = 600;

var projection = d3.geo.mercator();

var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

var path = d3.geo.path()
      .projection(projection);

var g = svg.append("g");

d3.json("./sfmaps/arteries.json", function(error, world) {
  g.selectAll("path")
    .data(topojson.object(world, world.features)
          .geometries)
    .enter()
    .append("path")
    .attr("d", path);
});
*/
