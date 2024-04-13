const express=require("express");
const mongoose = require("mongoose")
const cookieParser=require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();
import userModel from "./model/userModel";
const userRouter=require("./router/userRouter");
const dbConnect=require("./config/dataBase");


dbConnect();
const app=express();
app.use(cookieParser())
app.use(express.json());


mongoose.connect('mongodb+srv://ashishsingh92003:Ashish401@to-do-list-app.wpcjzun.mongodb.net/')
app.use('/auth', userRouter)

// app.use("/todo",todoRouter);
// app.use("/task",taskRouter);


const Port=process.env.PORT || 4000;


app.listen(Port, ()=>{
    console.log(`app is listening at ${Port}`);
})
