import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack'
import config from '../webpack.config.dev'
const compiler=webpack(config)
const app=express();
const port=3000

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../src/index.html'));

})

app.listen(port,(err)=>{
    if(err){
    throw err
    }
    open('http://localhost:'+port)
})
