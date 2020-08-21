var express=require('express');
var router=express.Router();
var Disease=require('../model/Disease');
var multer=require('multer');
var upload=multer({dest:'public/images/uploads'});

router.get('/diseaseadd',function(req,res){
    res.render('diseases/diseaseadd');
})

router.post('/diseaseadd',upload.single('photo'),function(req,res){
    var disease=new Disease();
 disease.title=req.body.title;
 disease.about=req.body.about;
 disease.doAnddont=req.body.doAnddont;
 disease.symptom=req.body.symptom;
 if(req.file) disease.imgUrl="/images/uploads/"+req.file.filename;
    disease.save(function(err,rtn){
        if(err) throw err;
           res.redirect('/diseases/diseaselist');
    })
});

router.get('/diseaselist',function(req,res){
    Disease.find(function(err,rtn){
if(err) throw err;
 console.log(rtn);
    res.render('diseases/diseaselist',{diseases:rtn});
})
})

router.get('/diseasedetail/:id',function(req,res){
    Disease.findById(req.params.id,function(err,rtn){
      if(err)throw err;
      res.render('diseases/diseasedetail',{diseases:rtn});
    })
    })

    router.get('/diseaseupdate/:id',function(req,res){
        Disease.findById(req.params.id,function(err,rtn){
          if(err)throw err;
          res.render('diseases/diseaseupdate',{diseases:rtn});
      
        })
      
      })
       
      
      router.post('/diseaseupdate/',upload.single('photo'),function(req,res){
        update={
            title:req.body.title,
            about:req.body.about,
            doAnddont:req.body.doAnddont,
            symptom:req.body.symptom,
          }
          if(req.file) update.imgUrl = '/images/uploads/' + req.file.filename;
     
          Disease.findByIdAndUpdate(req.body.id,{$set:update},function(err,rtn){
        if(err)throw err;
      
        res.redirect('/diseases/diseaselist');
      })
      })


      router.get('/diseasedelete/:id',function(req,res){
        Disease.findByIdAndRemove(req.params.id,function(err,rtn){
          if(err)throw err;
          console.log(rtn);
          res.redirect('/diseases/diseaselist');
      
        })
      })

module.exports=router;