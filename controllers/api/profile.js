var express = require('express');
var router = express.Router();
var models = require("../../models");

router.get('/:profile_id', function (req, res, next) {

})

router.post('/', function (req, res, next) {
	var profile = {};
	profile.user_id = req.body.user_id;
	profile.user_type = req.body.user_type || 1;

	models.Profile.create(profile).then(function (result) {
		result.dataValues.code = 200;
		res.json(result);
	}).catch(function (error) {
		res.status(500);
		res.json({ error: 500 });
	})

})

module.exports = router;