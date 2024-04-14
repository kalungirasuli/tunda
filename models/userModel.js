const mongoose = require("mongoose")
const logInModel = mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    firstname:{
        type: String,
        trim:true,
        required:true
    },
    secondname:{
        type: String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
})

module.exports = mongoose.model('User',logInModel);