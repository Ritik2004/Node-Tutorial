const express = require('express');
const users = require('./MOCK_DATA.json')
const {connectDb} = require('./connection')
const userRouter = require('./routes/user')

const app = express();
const PORT = 3000;
connectDb()
app.use(express.json())



app.use("/api/users",userRouter);


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})