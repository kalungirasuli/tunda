const express =require('express')
const router= express.Router()
const Admin =require('../controllers/admin')
const {auth,Adminauth}=require('../GenerateTokens')
router.get('/admin',Admin.get) // the dashboard homepage
router.get('/administrator',Admin.post) // the admin signup page
router.post('/admin',Admin.AdminSignup)// the admin signup router
router.get('/adminsignin',Admin.signin) // the admin signin page
router.post('/adminsignin',Admin.AdminSigin) // the admin signin router
router.get('/products',Admin.products)// the products
router.get('/addproduct',Admin.addproduct) //the add product page
router.get('/categories',Admin.categories)
router.get('/addcategory',Admin.addcategory)
router.get('/orders',Admin.orders)
router.get('/order',Admin.order)
router.get('/vendors',Admin.venders)
router.get('/addvender',Admin.addvender)
router.get('/customers',Admin.customers)

module.exports=router