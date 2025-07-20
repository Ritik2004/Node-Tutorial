const mongoose = require('mongoose')

//created Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle:{
        type:String
    },
    gender: {
        type:String,
        enum:["Male","Female","DontPrefer"]
    } 
})

//creating Model
const User = mongoose.model("user",userSchema)

module.exports = User;