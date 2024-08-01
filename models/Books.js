const mongoose=require("mongoose");
const Authors = require("./Authors");
const Bookmodel=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    book_id:{
        type:Number,
        unique:true,
        required:true
    },
    author_name:{
        type:String
    },
    publication_date:{
        type:Date
    }
})
module.exports=mongoose.model("Books",Bookmodel);