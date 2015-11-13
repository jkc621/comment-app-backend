var express = require('express');
var router = express.Router();
var models = require("../../models");

router.get('/:comment_id', function (req, res, next) {

})

router.post('/', function (req, res, next) {
	var comment = {};
	comment.creator_id = req.body.creator_id;
	comment.page_url = req.body.page_url;
	comment.comment_text = req.body.comment_text;
	comment.parent_comment_id = req.body.parent_comment_id || null;

	models.Comment.create(comment).then(function (result) {
		result.dataValues.code = 200;
		res.json(result);
	}).catch(function (error) {
		res.status(500);
		res.json({ error: 500 });
	})

})

module.exports = router;
