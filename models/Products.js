const mongoose = require("mongoose");

const uploads = new mongoose.Schema({
    
    image: {
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
   units:{
         type:String,
         required:true
    },
    saleprice:{
        type:String,
        required:true
    },
    regularprice:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        default:"false"
    },
    vendor:{
        type:String,
        required:true
   },
    date: {
        type: Date,
        default: Date.now
    },
    status:{
        type:String,
        default:"Active"
    },
    promocode:{
        type:String,
        default:""
    },

   
});

module.exports = mongoose.model("Upload", uploads);
