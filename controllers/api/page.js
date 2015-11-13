var express = require('express');
var router = express.Router();
var models = require("../../models");

router.get('/:page_id', function (req, res, next) {

})

router.post('/', function (req, res, next) {
	var page = {};
	page.url = req.body.url;
	page.site_id = req.body.site_id;

	models.Page.create(page).then(function (result) {
		result.dataValues.code = 200;
		res.json(result);
	}).catch(function (error) {
		res.status(500);
		res.json({ error: 500 });
	})
})

module.exports = router;