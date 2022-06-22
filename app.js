const express=require('express');
const app=express();
const path =require('path');
const puerto=3030;
app.listen(puerto,()=>console.log('el servidor esta coriiendo en http://localhost:'+ puerto))