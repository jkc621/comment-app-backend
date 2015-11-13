var express = require('express');
var router = express.Router();
var models = require("../../models");

router.get('/:user_id', function (req, res, next) {

})

router.post('/', function (req, res, next) {
	var user = {};
	user.user_id = req.body.user_id;
	user.email = req.body.email;

	models.User.create(user).then(function (result) {
		result.dataValues.code = 200;
		res.json(result);
	}).catch(function (error) {
		res.status(500);
		res.json({ error: 500 });
	})
})

module.exports = router;