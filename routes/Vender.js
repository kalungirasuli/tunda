const express = require("express");
const Vender = require("../controllers/Vender");
const router = express.Router();

router.get("/vendor", Vender.products);
router.get("/vendor/addproduct", Vender.addproduct);
router.get("/vendor/orders", Vender.orders);
router.get("/vendor/order", Vender.order);
router.get('/vendor/profile',Vender.profile)

module.exports = router;