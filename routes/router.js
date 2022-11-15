const express=require('express')
const router=express.Router()
const weathers=require('../models/temp')
router.post('/createData',(req,res)=>{
      weathers.create({
        location:req.body.location,
        temperature:req.body.temperature,
        degree:req.body.degree
    }).then((data)=>{
        res.json({data,message:"Added successfully"})
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
    
})

router.get('/recievedData',(req,res)=>{
    weathers.find().then((data)=>{
        res.send({data,message:"data recieved"})
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
})
router.delete("/cancel/location",(req, res)=> {
    weathers.deleteOne({location: req.body.location}).then(()=> {
        res.status(200).send("location Cancelled Sucessfully")
    }).catch((err)=> {
        res.status(400).send(err) 
    });
});
router.put("/updateLocation",(req,res)=>{
    weathers.find({location:req.body.location}).then((data)=>{
        if(data){

            weathers.updateOne({location:req.body.location}).then(()=>{
             res.status(200).send("location updated")
            }).catch((err)=>{
             console.log(err)
            })
        }
    })
})
module.exports=router