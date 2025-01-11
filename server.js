const express=require('express');
const app=express();
const port=3001;
const cors=require('cors');
const path=require('path');


const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
const url = "mongodb://localhost:27017"; // MongoDB server URL
const dbName = "mydb"; // Database name

// Connect to MongoDB
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.log("Error connecting to MongoDB:", err);
        return;
    }
    
    console.log("Database connected successfully");

    const db = client.db(dbName); // Get the reference to the database

    // Optional: Check if the collection exists (it will be created when data is inserted)
    db.createCollection('users', (err, res) => {
        if (err) {
            console.log("Error creating collection:", err);
            return;
        }
        console.log('Collection created successfully');
    });

    client.close();
});



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
