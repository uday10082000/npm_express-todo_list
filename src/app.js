const express=require('express');
const app=express();
const path=require('path');

const staticpath=path.join(__dirname,"../public");
// console.log(path.join(__dirname,"../public"))

app.use(express.static(staticpath));



app.get('/',(req,res) =>{
    res.send("hello uday");
})

app.get('/about',(req,res) =>{
    res.send("hello pooja");
})

app.listen(2000,()=>{
    console.log("listing on port 2000");
})