const Book=require("./../models/Books");
const addbook = async (req,res)=>{
    try {
        const data=req.body;
        const existbooks=await Book.findOne({book_id:data.book_id});
        if(existbooks){
            return res.status(409).json({msg:"Book Already Exists"});
        }
        const newdata=await Book.create(data);
        res.json({
            status:200,
            msg:"success"
        })
        console.log(newdata);
    } catch (error) {
        console.log("Error ",error);
        res.send(err);
    }
}
// get all books
const getbooks=async (req,res)=>{
    try {
        const allbooks=await Book.find();
        res.json({
            msg:"Done",
            allbooks:allbooks
        })
    } catch (error) {
        console.log("Error",error)
    }
}
// Update Books


// Delete Author
//Delete Operation
const deleteBooks = async(req,res) =>{
    try{
    const id = req.params._id;
    if(!id){
        res.send('Provide specific field to delete');

    }
    else{
        const deleteData = await Book.findByIdAndDelete(id);
        console.log(deleteData);
        res.send(deleteData);
    }

}catch(err){
    console.log(err);
    res.send(err);
}
}
// Update Author
//Update operation
const updateBook = async (req,res)=>{
    try{
        const id = req.params._id;
        const updateData = req.body;
        if(!id || !inputData){
            res.send('Provide specific field to get update');
        }
        else{
            const updateUser = await Book.findByIdAndUpdate(id,updateData,{
                new:true
            });
            console.log(updateUser);
            res.send(updateUser);
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
}
module.exports={
    addbook,
    getbooks,
    updateBook,
    deleteBooks
    
}