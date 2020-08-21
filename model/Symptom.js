var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var SymptomSchema=new Schema({
    
title:{
        type:String,
        required:true
    },
    symptom:{
        type:String,
      required:true
    }
})
module.exports=mongoose.model("Symptoms",SymptomSchema);