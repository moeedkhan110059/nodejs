const express = require('express');
const path   = require('path');
const hbs   = require('hbs');
const app = express();
const port = 8000;

// relative path , absolute path
const staticPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');
const templatePath = path.join(__dirname, '../templates/views');

// to set view engine
app.set('view engine','hbs');
// set custom template folder for template engine // by default views folder set
app.set('views',templatePath);
hbs.registerPartials(partialsPath);


// built in middleware
//app.use(express.static(staticPath));


// template engine route

// template engine we use res.render() function in case of template engine without engine here we use res.sender() function
app.get('',(req,res)=>{
    res.render("index");  // index.hbs
 })


app.get('/aboutus',(res,req)=>{
    // here we swap parameter so here first parametr is request & 2nd parameter is response
      req.send("hello world from about us page");
    //
 })

 app.get('*',(req,res)=>{
  res.render('404',{
    errorcomment:"OOps page could not be found!"
  });
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})