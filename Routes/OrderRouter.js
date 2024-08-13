const OrderController=require('../Controllers/Ordercontroller')
const express=require('express');
const router=express.Router();
const auth=require("../Middlewares/Auth")
router.post("/",auth,OrderController.createorder);
module.exports=router