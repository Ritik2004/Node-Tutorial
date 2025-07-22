const cluster = require("cluster");
const express = require('express');
const os = require("os");

const totalCPUS = os.cpus().length;
if(cluster.isPrimary){
    for(let i=0;i<totalCPUS;i++){
        cluster.fork();
    }
}
else{
    const app = express();
    const PORT = 3000;
    app.get("/", (req,res)=>{
    return res.json({message:`Hello from express ${process.pid}`})
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})
}