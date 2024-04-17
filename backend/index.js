const express=require("express");
const mongoose = require("mongoose")
const cookieParser=require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();
const userModel = require("./model/userModel.js");
const userRouter=require("./router/userRouter.js");
const dbConnect=require("./config/dataBase");


dbConnect();
const app=express();
app.use(cookieParser())
app.use(express.json());

userModel();


// app.use("/todo",todoRouter);
// app.use("/task",taskRouter);


const Port=process.env.PORT || 4000;


app.listen(Port, ()=>{
    console.log(`app is listening at ${Port}`);
})
