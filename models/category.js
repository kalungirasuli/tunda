const mongoose=require('mongoose')

const catergory=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})