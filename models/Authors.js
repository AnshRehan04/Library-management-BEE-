const mongoose=require("mongoose");
const Authormodel=new mongoose.Schema({
    Fullname:{
        type:String,
        required:true,
        unique:true
    },
    Country :{
        type:String
    },
    genre:{
        type:String
    }
})

module.exports=mongoose.model("Authors",Authormodel)