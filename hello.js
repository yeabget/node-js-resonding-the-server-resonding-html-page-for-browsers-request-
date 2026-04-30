const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/view/index.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/view/about.html')
})
app.listen(3000)
