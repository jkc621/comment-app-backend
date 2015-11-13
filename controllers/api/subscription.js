var express = require('express');
var router = express.Router();
var models = require("../../models");

router.get('/:subscription_id', function (req, res, next) {

})

router.post('/', function (req, res, next) {
	var subscription = {};
	subscription.site_id = req.body.site_id;
	subscription.profile_id = req.body.profile_id;

	models.Subscription.create(subscription).then(function (result) {
		result.dataValues.code = 200;
		res.json(result);
	}).catch(function (error) {
		res.status(500);
		res.json({ error: 500 });
	})
})

module.exports = router;