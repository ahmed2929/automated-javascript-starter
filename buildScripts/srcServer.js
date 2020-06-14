import express from 'express';
import open from 'open';
import path from 'path';

const app=express();
const port=3000
app.get('/',(req,res)=>{
    res.sendfile(path.join(__dirname,'../src/index.html'));

})

app.listen(port,(err)=>{
    if(err){
    throw err
    }
    open('http://localhost:'+port)
})
