var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var DoctorSchema=new Schema({
    categories:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    clinic:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Doctors",DoctorSchema);