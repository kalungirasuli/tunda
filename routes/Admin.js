const express =require('express')
const router= express.Router()
const Admin =require('../controllers/admin')
const {auth,Adminauth}=require('../GenerateTokens')
router.get('/admin',Admin.get) // the dashboard homepage
router.get('/administrator',Admin.post) // the admin signup page
router.post('/admin',Admin.AdminSignup)// the admin signup router
router.get('/products',Adminauth,Admin.products)
router.get('/addproduct',Admin.addproduct)
router.get('/categories',Admin.categories)
router.get('/addcategory',Admin.addcategory)
router.get('/orders',Admin.orders)
router.get('/order',Admin.order)
router.get('/vendors',Admin.venders)
router.get('/addvender',Admin.addvender)
router.get('/customers',Admin.customers)

module.exports=router