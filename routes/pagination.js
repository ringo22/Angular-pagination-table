var express = require('express');
var router = express.Router();

/* GET pagination page. */
router.get('/pagination/', function(req, res, next) {
  res.render('pagination', { title: 'Express' });
});

module.exports = router;
