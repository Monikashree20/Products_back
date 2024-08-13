const Usercontroller=require("../Controllers/Usercontroller")
const express=require('express')
const router=express.Router();
router.post("/",Usercontroller.createuser)
router.get("/",Usercontroller.login)
module.exports=router