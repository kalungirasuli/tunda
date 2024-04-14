const express=require('express')
const router=express.Router()
const User=require('../controllers/user')

router.get('/cart', User.cart)
router.get('/checkout',User.checkout)
router.get('/accountsetting',User.setting)
router.get('/contact',User.contact)
router.get('/accountaddress',User.address)
module.exports=router