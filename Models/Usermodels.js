const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")
// const { name } = require('nodeman/lib/mustache')
const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
})

Userschema.pre("save",async function (next){
    if(!this.isModified("password")){
     return next()
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);                  //salt==random number genereated
    next()
})
const User=new mongoose.model('User',Userschema)
module.exports=User;