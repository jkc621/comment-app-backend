var express = require('express');
var router = express.Router();
var models = require("../../models");

router.get('/:site_id', function (req, res, next) {

})

router.post('/', function (req, res, next) {
	var site = {};
	site.name = req.body.site_name;
	site.url = req.body.site_url;
	site.description = req.body.site_description;

	models.Site.create(site).then(function (result) {
		result.dataValues.code = 200;
		res.json(result);
	}).catch(function (error) {
		res.status(500);
		res.json({ error: 500 });
	})
})

module.exports = router;

