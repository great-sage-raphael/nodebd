
const express=require('express');
const app=express();
var fs= require('fs');

    app.get('/',(req,res)=>{
        fs.readFile('project.html',function(err,data){
            res.setHeader('content-type','text/html');
            res.send(data);

          }) ;
    })
    app.get('/about',(req,res)=>{
       
        res.send('<h1>about page</h1>')

    })
app.listen(3000,console.log("server is running"));


//const readStream=fs.createReadStream('project.html','utf-8');
//readStream.on('data',(a)=>{
 //   console.log(a);
//})
//const writeStream=fs.createWriteStream('example.html','utf-8');
 
 //readStream.pipe(writeStream);

 const buf = Buffer.from('Hello');
 console.log(buf.toJSON());