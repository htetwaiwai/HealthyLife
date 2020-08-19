var express=require('express');
var router=express.Router();
var Doctor=require('../model/Doctor');

router.get('/doctoradd',function(req,res){
    res.render('doctor/doctoradd');
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
           res.redirect('/doctors/doctorlist');
    })
});
router.get('/doctorlist',function(req,res){
    Doctor.find(function(err,rtn){
        if(err)throw err;
        console.log(rtn);
        res.render('doctor/doctorlist',{doctor:rtn});
    })
})
router.get('/doctordetail/:id',function(req,res){
    Doctor.findById(req.params.id,function(err,rtn){
        if(err)throw err;
        res.render('doctor/doctordetail',{doctors:rtn});
    })
})
router.get('/doctorupdate/:id',function(req,res){
    Doctor.findById(req.params.id,function(err,rtn){
        if(err)throw err;
        console.log(rtn);
        res.render('doctor/doctorupdate',{doctors:rtn});
    })
})
router.post('/doctorupdate',function(req,res){
    var update={
        categoires:req.body.categories,
        name:req.body.name,
        degree:req.body.degree,
        clinic:req.body.clinic,
        location:req.body.location,
        phno:req.body.phno
    };
    Doctor.findByIdAndUpdate(req.body.id,{$set:update},function(err,rtn){
        if(err)throw err;
        res.redirect('/doctors/doctorlist')
    })
});
router.get('/doctordelete/:id',function(req,res){
    Doctor.findByIdAndRemove(req.params.id,function(err,rtn){
        if(err)throw err;
        res.redirect('/doctors/doctorlist')
    })
})
module.exports=router;