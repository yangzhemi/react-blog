var express = require('express');
var user = express();
var UserController = require('../controllers/UserController');

user.accept = function(socket) {
  socket.on('login',function(params) {
  	var now = new Date();
    UserController.createUser();
    console.log('dd',params)
  });
}

module.exports = user;