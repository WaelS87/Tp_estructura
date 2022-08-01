const express=require('express');
const app=express();
const path =require('path');
const puerto=3030;
app.use(express.static('Public'))

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/register',(req,res)=>res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'views','login.html')))




app.listen(puerto,()=>console.log('el servidor esta coriiendo en http://localhost:'+ puerto))