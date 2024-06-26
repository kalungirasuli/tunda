const express = require("express");
const Profile = require("../models/adminProfileModel");
const User=require('../models/userModel')
const {Accessoken,sendAccessToken}=require("../GenerateTokens")
const VideoContent=require('../models/comments')
const Products=require('../models/Products')
const Videos=require('../models/videoShema')
const {auth}=require('../GenerateTokens')
const bcrypt=require('bcrypt')
module.exports = {
  profile: async (req, res) => {
    try {
      const admin = new Profile(req.body);
      await admin.save();
      res.status(200).send("Successfully added Admin");
    } catch (error) {
      res.status(500).send("Failed to Post DATA ");
    }
  },
  signin: async (req, res) => {
    try {
      res.status(200).render('./dashboard/signin');
    } catch (error) {
      res.status(500).send("failed to retrieve admins");
    }
  },
  post:async(req,res)=>{
    try {
      const check= await Profile.find()
       if(check.length>0) return res.redirect('/adminsignin')
      res.render("./dashboard/signup");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while signing up." });
    }
  },
  AdminSignup: async (req,res) => {
    try {
      const check= await Profile.find()
       if(check.length>0) return res.redirect('login')
      const dataUser = req.body;
      const saltRounds = 10;
      const password = await bcrypt.hash(req.body.password, saltRounds);
      const user = new Profile({...dataUser,password});
      const data = await user.save();
      res.redirect("/signin");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while signing up." });
    }
  },
  AdminSigin:async(req,res)=>{
    try{
        const fields=req.body
        const userHeaders=req.headers
        if(!userHeaders) return res.status(400).json({message:"unauthorized token or token expired"})
        if(!fields.email || !fields.password){
            return res.status(400).json({
                message:"all fields are required"
            })
        }else{
            const check= await Profile.findOne({email:req.body.email})
            if(!check){
                return res.status(400).redirect('/adminsignin')
            }else{
                const comparePassword= await bcrypt.compare(req.body.password,check.password)
                if(!comparePassword){
                    return res.status(400).redirect('/adminsignin')
                }else{
                    //generate token from user id
                    const accessToken=  Accessoken(check._id)
                    sendAccessToken(res,accessToken)
                    res.status(200).redirect('/admin')
                }
            }
        }
    }catch(err){
        console.error(err)
    }
  },
  get: async (req, res) => {
    try {
      res.status(200).render('./dashboard/index.ejs');
    } catch (error) {
      res.status(500).send("failed to retrieve admins");
    }
  },
  orders:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/order-list')
    }catch(err){
        res.status(500).send("failed to retrieve orders")
    }
  },
  order:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/order-single')
    }catch(err){
        res.status(500).send("failed to retrieve order")
    }
  },
  products:async(req,res)=>{
    try{
      const products= await Products.find()
        res.status(200).render('./dashboard/products',{products})
    }catch(err){
        res.status(500).send("failed to retrieve products")
    }
  },
  addproduct:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/add-product')
    }catch(err){
        res.status(500).send("failed to add product")
    }
  },
  categories:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/categories')
    }catch(err){
        res.status(500).send("failed to retrieve categories")
    }
  },
  addcategory:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/add-category')
    }catch(err){
        res.status(500).send("failed to add category")
    }
  },
  venders:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/vendor')
    }catch(err){
        res.status(500).send("failed to retrieve venders")
    }
  },
  addvender:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/add-vender')
    }catch(err){
        res.status(500).send("failed to add vender")
    }
  },
  customers:async(req,res)=>{
    try{
        res.status(200).render('./dashboard/customers')
    }catch(err){
        res.status(500).send("failed to retrieve customers")
    }
  },
  delete: async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.params.id });
      res.status(200).send("successfully deleted admin record");
    } catch (error) {
      res.status(500).send("failed to delete admin details");
    }
  },
};
