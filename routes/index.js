var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/cadd',function(req,res){
  res.render('user/cadd');
})
module.exports = router;

