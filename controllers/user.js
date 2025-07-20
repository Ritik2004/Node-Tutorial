const User = require('../models/user')
async function handleGetAllUsers(req,res){
     try {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

async function getUserById(req,res){
    const id = req.params.id;
    const user =await User.findById(id)
   return res.status(201).json(user)
}

async function addUser(req,res){
    const body = req.body;

    if(!body || 
        !body.firstName || 
        !body.lastName || 
        !body.email || 
        !body.jobTitle || 
        !body.gender
    )
     {
        return res.status(400).json({msg:"All fields are req..."})
    }
    const result = await User.create({
      firstName:body.firstName,
      lastName:body.lastName,
      email:body.email,
      jobTitle:body.jobTitle,
      gender:body.gender
    })
        return res.status(201).json({msg:"Success"})    
}

async function updateUser(req,res){
    console.log(req.body)
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body)
    
    if(!updateUser){
        return res.status(404).json({msg:"User not found"})
    }
   
    return res.status(201).json({msg:"Success"})
}
async function deleteUserById(req,res){
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    return res.status(201).json({msg:"Deleted"})
}

module.exports = {handleGetAllUsers,getUserById,addUser,updateUser,deleteUserById}