const express = require("express");
const router = express.Router();
const Images = require("../controllers/adminProducts");
const Imagedata= require('../models/Products')
const multer = require("multer");
const {auth,Adminauth}=require('../GenerateTokens')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./public");
    },
    filename:(req, file, cb)=>{
      const name = file.originalname.toString().split(" ").join("_")
        cb(null ,Date.now()+"_"+name);
    },
});
let upload = multer({storage: storage}).single('image');
router.post("/admin/products",upload,Images.post);
router.get("/admin/products",Images.getUpdatepage);
router.get("/admin/products/put",upload, Images.put)
router.get("/admin/products/delete", Images.delete);

module.exports = router;