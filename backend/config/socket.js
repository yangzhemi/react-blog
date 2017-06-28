var express = require('express');
var assign = require('../middleware/assign');
var io = express();

io.ready = function(server){
  var sio = require('socket.io')(server);
  sio.on('connection', function(socket){
  	assign.accept(socket);
    console.log( "一个新连接" ); 
  });
}; 

module.exports = io;