const mongoose=require('mongoose')
const weatherData=new mongoose.Schema({
    location:{
        type:String,
        required:true
    },
    temperature:{
        type:Number,
        required:true
    },
    degree:{
        type:Number,
        required:true
    }
})
const weathers=new mongoose.model('weather',weatherData)
module.exports=weathers;