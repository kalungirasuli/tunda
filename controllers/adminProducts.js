const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const Upload=require('../models/Products')

module.exports = {

  post:
  ( async(req, res) => {
 
    try {
      const datafields= req.body;
  
      const imagepaths = req.file.path;
      console.log(imagepaths)
      const imagedata= imagepaths.toString()
      const pathimage=`/`+ imagedata.split(`\\`)[1]
      const data = {
        ...datafields,
        image: pathimage,
      };
      const uploading= await  Upload(data);
      await uploading.save();
      res.status(201).redirect('/admin');
      console.log(`File uploaded! ${datafields.title} ${datafields.category} ${datafields.units} ${datafields.saleprice} ${datafields.regularprice} ${datafields.weight} ${datafields.stock} ${datafields.vendor} ${datafields.promocode} ${datafields.image} ${datafields.description}`);
    } catch (err) {
      res.status(400).send('Error uploading product!');
      console.error(err);
      console.log('Error uploading product!'); 
    }
  }), 
  getUpdatepage:async(req,res)=>{
    try{
      const data =req.query.id
      const image= await Imagedata.findById({_id:data})
      res.render('update',{image})
      }catch(err){
          console.log(err)
          res.send('err occured')
      }},
  put: async (req, res) => {
    try {
      const datafields= req.body;
      const imagepaths = req.files['image'].map(file => file.path);
      const imagedata= imagepaths.map(image=>`${image}`).toString()
      const pathimage=`/`+ imagedata.split(`\\`)[1]
      console.log(description)
      const description = datafields.description;
      const data = {
        ...datafields,
        image: pathimage,
      };
      console.log(data);
      console.log(data)
      const content = await Upload.findOneAndUpdate(
        { _id: req.query.id },
        {...data},
        { new: true }
      );
      console.log(content)
      await content.save()
      const saved=await Upload.findOne({_id:req.query.id})
      console.log(saved)
      res.status(200).redirect('/dashboard');
    } catch (error) {
      console.log(error)
      res.status(500).send("failed to update product");
    }
  },
  delete:async(req,res)=>{
    try{
      await Upload.findOneAndDelete({_id:req.query.id})
      res.status(200).redirect('/products')
    }catch(err){
      console.log(err)
      res.send('error occured when deleting product')
    }
  },

};