var models = require('../config/models');
var express = require('express');
var userController = express();

userController.createUser = function () {
    var user = models.user();
    return user.create({
        name: 'janedoe',
        email: 'qq@qq.com'
    });
};

module.exports = userController;


