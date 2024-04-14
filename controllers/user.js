const express = require("express");
module.exports = {
  cart:async(req,res)=>{
    try{
        res.render('./pages/cart')
    }catch(err){
        console.error(err)
    }
},
checkout:async(req,res)=>{
    try{
        res.render('./pages/checkout')
    }catch(err){
        console.error(err)
    }
},
setting:async(req,res)=>{
    try{
        res.render('./pages/account-settings')
    }catch(err){
        console.error(err)
    }
},
address:async(req,res)=>{
    try{
        res.render('./pages/account-address')
    }catch(err){
        console.error(err)
    }
},
contact:async(req,res)=>{
    try{
        res.render('./pages/contact')
    }catch(err){
        console.error(err)
    }
}
};


