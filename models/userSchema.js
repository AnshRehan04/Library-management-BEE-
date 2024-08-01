const mongoose=require("mongoose");
const usermodel=new mongoose.Schema({
    name:{
        type:String
    },
    mobile_number:{
        type:Number,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    nation:{
        type:String,
        default:"INDIA"
    }
})

module.exports=mongoose.model("user",usermodel)