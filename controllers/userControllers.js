const user=require("./../models/userSchema")
const login = async (req, res) => {    
    try {
        
    const data = req.body;
    const existingUser = await user.findOne({email:data.email});
    const numberexist = await user.findOne({mobile_number:data.mobile_number});

    if (existingUser || numberexist) {
    return res.status(409).json({ message: 'User already exists' });
    }
    const newdata= await user.create(data);
    res.json({
        status:200,
        msg:"Success"
    })
    console.log(newdata)
} catch(err){
    console.log("Error",err)
    res.send(err);
}
};

const getdata=async (req,res)=>{
    try {
        const users=await user.find();
        res.json({
            msg:"Done",
            users:users
        })
    } catch (error) {
        console.log(error)
    }
}
// Update users
const update = async (req, res) => {
    try {
        const id = req.query.id;
        const updatedata = req.body;

        if (!id || !updatedata || Object.keys(updatedata).length === 0) {
            return res.status(400).send("Provide specific field");
        }

        const updateuser = await user.findOneAndUpdate(id, updatedata, { new: true });

        if (!updateuser) {
            return res.status(404).send("User not found");
        }

        console.log(updateuser);
        res.status(200).send(updateuser);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while updating the user");
    }
};

// delete users
const deleteUserData = async (req, res) => {
    const inputData = req.body;
    try {
        await user.findOneAndDelete({ email: inputData.email });
        console.log("User Record Deleted");
        res.send("User Record Deleted");
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    login,
    getdata,
    update,
    deleteUserData
};
