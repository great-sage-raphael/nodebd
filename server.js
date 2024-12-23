const express=require('express');
const app=express();
const port=3001;
const cors=require('cors');
const path=require('path');
const { request } = require('http');
const MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("database created");
    db.close();
    var dbo=db.db('mydb');
    
})
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'/public')));

const mockuser={
    username:'john',password:'1234',name:'john doe'
}


app.post('/login',(req,res)=>{
    
    const {username,password}=req.body;
    

    if(mockuser.username=== username && mockuser.password===password){
        res.json({name:mockuser.name})
    }
    else{
        res.status(401).send('invalid username or password');
    }
})
app.listen(port,()=>{console.log(`http://localhost:${port}/`)})
