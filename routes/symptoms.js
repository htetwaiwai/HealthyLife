var express=require("express");
var router=express.Router();
var Symptom=require('../model/Symptom');


router.get('/symptomadd',function(req,res){
res.render('symptom/symptomadd');
})

router.post('/symptomadd',function(req,res){
    var symptom=new Symptom();
    symptom.title=req.body.title;
    symptom.symptom=req.body.symptom;
    symptom.save(function(err,rtn){
        if(err) throw err;
           res.redirect('/symptoms/symptomlist');
})
})
router.get('/symptomlist',function(req,res){
    Symptom.find(function(err,rtn){
        if (err) throw err;
        console.log(rtn);
        res.render('symptom/symptomlist',{symptom:rtn});
    })
})
router.get('/symptomdetail/:id',function(req,res){
    Symptom.findById(req.params.id,function(err,rtn){
        if(err)throw err;
        res.render('symptom/symptomdetail',{symptom:rtn});
    })
})
router.get('/symptomupdate/:id',function(req,res){
    Symptom.findById(req.params.id,function(err,rtn){
        if(err)throw err;
        console.log(rtn);
        res.render('symptom/symptomupdate',{symptom:rtn});
    })
})
router.post('/symptomupdate',function(req,res){
    var update={
        title:req.body.title,
        symptom:req.body.symptom
    };
    Symptom.findByIdAndUpdate(req.body.id,{$set:update},function(err,rtn){
        if(err)throw err;
        res.redirect('/symptoms/symptomlist')
    })
});
router.get('/symptomdelete/:id',function(req,res){
    Symptom.findByIdAndRemove(req.params.id,function(err,rtn){
        if(err)throw err;
        res.redirect('/symptoms/symptomlist')
    })
})
module.exports=router;
