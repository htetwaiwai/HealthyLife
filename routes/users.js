var express = require('express');
var router = express.Router();
var Doctor=require('../model/Doctor');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/doctor',function(req,res){
  var d={categories:"Ophthalmologist"};
  Doctor.find(d,function(err,rtn){
    if(err)throw err;
    res.render('user/Doctor',{doctors:rtn});
  })
})

router.get('/doctor1',function(req,res){
  var d={categories:"Ophthalmologist"};
  Doctor.find(d,function(err,rtn){
    if(err)throw err;
    res.render('user/Doctor1',{doctors:rtn});
  })
})

router.get('/doctor2',function(req,res){
  var d2={categories:"General Paractitioner"};
  Doctor.find(d2,function(err,rtn){
    if(err)throw err;
    res.render('user/Doctor2',{doctors:rtn});
  })
})
module.exports = router;
