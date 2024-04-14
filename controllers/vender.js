const express = require("express");
const router = express.Router();

module.exports={
    products:(req,res)=>{
       try{
        res.render('./vendor/products')
       }catch(err){
        res.send('server error')
       }
    },
    addproduct:(req,res)=>{
        try{
            res.render('./vendor/add-product')
        }catch(err){
            res.send('server error')
        }
    },
    orders:(req,res)=>{
        try{
            res.render('./vendor/orders-list')
        }catch(err){
            res.send('server error')
        }
    },
    order:(req,res)=>{
        try{
            res.render('./vendor/order-single')
        }catch(err){
            res.send('server error')
        }
    },
    profile:(req,res)=>{
        try{
            res.render('./vendor/profile')
        }catch(err){
            res.send('server error')
        }
    }
}