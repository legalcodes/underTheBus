var express = require('express');
var server = express();

var port = process.env.PORT || 3000;
// var port = 3000;

var morgan = require('morgan');
var bodyParser = require('body-parser');

morgan('combined', {
		skip: function (req, res) { return res.statusCode < 400; }
});

server.use(morgan('combined'));

server.use(express.static(__dirname + '/../client'));

server.use(bodyParser.json());

server.listen(port, function(){
	console.log('Listening on port: ', port);
});
