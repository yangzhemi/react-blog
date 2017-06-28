var express = require('express');
var assign = express();
var user = require('../modules/user');

assign.accept = function(socket) {
  user.accept(socket);
}


module.exports = assign;
