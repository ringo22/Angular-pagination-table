var express = require('express');
var router = express.Router();

/* GET pagination page. */
router.get('/', function(req, res, next) {
  res.render('pindex', { title: 'Express' });
});

module.exports = router;
