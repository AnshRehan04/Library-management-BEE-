const mongoose=require("mongoose");
const Publication=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    phone_number:{
        type:Number
    },
    Country:{
        type:String
    },
    genre:{
        type:String
    }
})
module.exports=mongoose.model("Publications",Publication);