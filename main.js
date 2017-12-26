var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	RoomController = require('./controller/roomController');

server.listen(3000);
app.use("/", express.static(__dirname + '/site/'));
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
	var userObj = null;
  	console.log("new user connection");
  	
	socket.on('new text', function (text, callback){
		
	});
});
var tick = 0;
var theLoop = setInterval(function () {
	//console.log("loop", tick);
  	RoomController.update(tick);
  	++tick;
}, 100);