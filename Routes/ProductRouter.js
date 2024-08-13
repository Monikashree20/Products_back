const ProductController=require('../Controllers/Productcontroller')
const express=require('express');
const router=express.Router();
const auth=require("../Middlewares/Auth")
router.get('/',auth,ProductController.getProduct);
router.post("/",auth,ProductController.createProduct);
module.exports=router
