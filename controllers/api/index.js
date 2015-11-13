var express = require('express');
var router = express.Router()

router.use('/comment', require('./comment'))
router.use('/site', require('./site'))
//router.use('/users', require('./users'))

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router