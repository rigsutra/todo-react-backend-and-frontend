const express = require("express");
const {
  SignUp,
  Signin,
  updatePassword,
} = require("../controller/userController");
userRouter = express.Router();

userRouter.post("/Signup", SignUp);
userRouter.post("/Signin", Signin);

userRouter.patch("/updatePassword", updatePassword);

module.exports = userRouter;
