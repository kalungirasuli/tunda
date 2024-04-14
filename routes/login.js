const express=require('express')
const router=express.Router()
const Login=require('../controllers/loginControllers')

router.post('/signin', Login.login)
router.get('/signup',Login.signuppage)
router.post('/signup',Login.signUp)
router.post('/Adminlogin', Login.Adminlogin)
router.get('/logout',Login.logout)
router.get('/signin',Login.loginpage)
router.get('/forgotpassword',Login.forgotpassword)
router.get('/Adminsignup',async(req,res)=>{
  res.status(200).render("adminsignup")  
})

module.exports=router