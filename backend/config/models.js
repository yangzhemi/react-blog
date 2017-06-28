var db = require('../config/config');
var express = require('express');
var model = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize(db.pool.database,db.pool.user,db.pool.password,{host:db.pool.host,port:db.pool.port});

model.user = function () {
    var User = sequelize.define('user', {
        email: Sequelize.STRING,
        name: Sequelize.STRING
    },{
        timestamps: true
    });
    return User;
};

model.token = function () {
    var Token = sequelize.define('token',{
        value: Sequelize.STRING,
        user_id: Sequelize.BIGINT
    },{
        timestamps: false
    });
    return Token;
};

model.lists = function () {
    var Lists = sequelize.define('lists',{
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        owner_id: Sequelize.BIGINT
    },{
       timestamps: false
    });
    return Lists;
};

model.article = function () {
    var Article = sequelize.define('article',{
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
        author_id: Sequelize.BIGINT
        },{
            timestamps: true
        });
    return Article;
};

model.item = function () {
    var Item = sequelize.define('item',{
        value: Sequelize.STRING,
        label: Sequelize.STRING,
        type: Sequelize.STRING
    },{
        timestamps: false
    });
    return Item;
};

model.relations = function () {
    var Relations = sequelize.define('relations',{
        name: Sequelize.STRING
    },{
        timestamps: false
    });
    return Relations;
};

model.relation_item = function () {
    var Relation_item = sequelize.define('relation_item',{
        relation_id: Sequelize.BIGINT,
        item_id: Sequelize.BIGINT
    },{
        timestamps: false
    });
    return Relation_item;
};

model.createTable = function () {
    model.user();
    model.token();
    model.lists();
    model.article();
    model.item();
    model.relations();
    model.relation_item();
    // sequelize.sync({force:true});
    sequelize.sync();
};

module.exports = model;

