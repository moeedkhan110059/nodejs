const express = require('express')
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
   res.send("hello world from express js");
})

app.get('/about',(req,res)=>{
    res.status(200).send("hello world from about us page");
 })

 app.get('/temp',(req,res)=>{
    res.send("hello world from temp page");
 })


app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})