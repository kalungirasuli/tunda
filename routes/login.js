const express=require('express')
const router=express.Router()
const Login=require('../controllers/loginControllers')


router.get('/signup',Login.signuppage)// the signup page
router.post('/signup',Login.signUp)// the signup route
router.get('/logout',Login.logout)// the logout route
router.get('/signin',Login.loginpage) // the signin page
router.post('/signin', Login.signin)// the signin route
router.get('/forgotpassword',Login.forgotpassword) // the forgot password page


module.exports=router