const mongoose = require('mongoose')

async function connectDb(){
    try{
const conn =  await mongoose.connect("mongodb://localhost:27017/user-detail")
    console.log(`Mongo db connected: ${conn}`)
  }
    catch(err){
    console.error("Mongodb connection error",err.message)
    }
}

module.exports = {connectDb}