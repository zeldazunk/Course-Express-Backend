/*
var express = require('express');
var router = express.Router(); */

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My Cats',
    cats: [
      { name: 'Winston' },
      { name: 'Churchill' },
      { name: 'Walnut' },
      { name: 'Daphne' }
    ]
  });
});

module.exports = router;