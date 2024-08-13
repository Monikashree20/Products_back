const express = require('express');
const app = express();
const productsRoutes = require("./Routes/ProductRouter");
const UserRoutes = require("./Routes/UserRouter");
const cartRoute = require("./Routes/CartRouter");
const orderRoute=require("./Routes/OrderRouter");
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://myAtlasDBUser:Sugandhi20@myatlasclusteredu.fbhzyk3.mongodb.net/productDB").then(() => {
    console.log("Connected to DataBase");
});

app.use("/products", productsRoutes);
app.use("/user", UserRoutes);
app.use("/cart", cartRoute); 
app.use("/order",orderRoute);


app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});
