const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const routers=require('./routes/router')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

mongoose.connect("mongodb://localhost/weatherAPI", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.use(routers)

app.listen(8080,()=>{
    console.log("server started")
})