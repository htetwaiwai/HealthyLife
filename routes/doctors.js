var express=require('express');
var router=express.Router();
var Doctor=require('../model/Doctor');

router.get('/doctoradd',function(req,res){
    res.render('user/doctor');
})
router.post('/doctoradd',function(req,res){
    var doctor=new Doctor();
    doctor.categories=req.body.categories;
    doctor.name=req.body.name;
    doctor.degree=req.body.clinic;
    doctor.clinic=req.body.clinic;
    doctor.location=req.body.location;
    doctor.phno=req.body.phno;
    doctor.save(function(err,rtn){
        if(err) throw err;
           res.redirect('/');
    })
});

module.exports=router;