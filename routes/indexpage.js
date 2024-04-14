const express= require('express')
const router=express.Router()
const controller=require('../controllers/data')
const {auth}=require('../GenerateTokens')
const Images=require('../models/images')
router.get('/',async(req,res)=>{
    try{
        const image=await Images.find()
        res.render('index',{image})
    }catch(err){
        res.send('internal server error')
    }
})
module.exports=router