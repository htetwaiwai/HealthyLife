var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var DiseaseSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    doAnddont:{
        type:String,
        required:true
    },
    
    symptom:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
  
})

module.exports=mongoose.model("Disease",DiseaseSchema);