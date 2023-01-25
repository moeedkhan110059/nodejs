const express = require('express')
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
   res.send("hello world from express js");
})

// object passing to front end side
app.get('/contactus',(req,res)=>{
    res.send({
        id:1,
        name:"moeed khan"
    });
 })
// passing array  of object 
//  res.send convert only array or object to json object
 app.get('/product',(req,res)=>{
    res.send([
    {
        id:1,
        name:"moeed khan"
    },
    {
        id:2,
        name:"moin khan"
    }
   ]);
 })


 // res.json convert also non- object to json object
 app.get('/product-detail',(req,res)=>{
    res.json([
    {
        id:1,
        name:"moeed khan"
    },
    {
        id:2,
        name:"moin khan"
    }

   ]);
 })

 app.get('/cart',(req,res)=>{
    res.write('<h1>hello html data passing from server to client side</h1>')
    res.write('<h2>Check again whether execution policy changed by running this command</h2>')
    res.send();
 })


app.listen(port,()=>{
    console.log("server running at port 8000");
})