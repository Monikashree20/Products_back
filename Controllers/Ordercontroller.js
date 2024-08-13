const Order=require("../Models/Ordermodels");
const User =require("../Models/Usermodels")
// const Cart=require("../Models/Cartmodels");

exports.createorder=async(req,res)=>{
    // const {user_id}=req.user;
    const{customerName,customerAddress,PhoneNo,products,OrderDate,DeliveryDate}=req.body;
    // let cart=await Cart.findOne({user_id});
    // if(!cart){
    //     return res.status(404).json({message:"Cart not found"});
    // }

    const { user_id} = req.user;
    let user =await User.findOne({_id:user_id});
    const email=user.email


    try{
        const order=new Order({
            user_id,
            customerName,
            email,
            customerAddress,
            PhoneNo,
            OrderDate,
            DeliveryDate,
        });
        
        await order.save();
        res.status(200).json("Order created successfully");
    }catch (err) {
        res.status(500).json({ message: "Failed to create order", error: err });
    
}
}