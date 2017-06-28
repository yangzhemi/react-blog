var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get',function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  UserController.getUsers();
});

router.post('/create', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  UserController.createUser().then(function(result){
    res.json(result.dataValues);
  });
});

module.exports = router;
