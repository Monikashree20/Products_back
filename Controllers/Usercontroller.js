const User=require("../Models/Usermodels")
const { v4: uuidv4 } = require('uuid');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


exports.createuser=async(req,res)=>{
    const {name,email,password}=req.body;
    const user=new User({
        id:uuidv4(),
     name,
     email,
     password
    })
    await user.save();
    res.status(200).json("user created successfully");
 };

exports.login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json("Invalid email or passwoed");
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json("Invalid email or Password");
        }
        const token=jwt.sign({user_id:user._id},"secret token",{
            expiresIn:"10h",
        });
        return res.status(200).json(token);
    }catch(err){
        console.log(err);
    }
}
