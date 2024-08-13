const Product=require("../Models/Productmodels")
const { v4: uuidv4 } = require('uuid');

exports.createProduct=async(req,res)=>{
    const{title,description,price,cateogary,rating,image}=req.body;
    const product=new Product({
        id:uuidv4(),
        title,
        price,
        description,
        cateogary,
        rating,
        image
    });
    await product.save();
    res.status(200).json("Product created successfully");
};

exports.getProduct=async (req,res)=>{
    try{
        const products=await Product.find();
        res.send(products)
    }catch(err){
        console.log(err);
    }
}