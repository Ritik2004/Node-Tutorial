const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 3000;

app.get('/api/users',(req,res)=>{
     return res.json(users)
})

app.get('/api/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id == id)
   return res.json(user)
})
app.post('api/users/',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})