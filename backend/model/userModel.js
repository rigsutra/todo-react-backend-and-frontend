const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },

  lastname: {
    type: String,
    require: true,
  },

  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  confirmPassword: {
    type: String,
    require: true,
  },

  // tokens : [
  //     {
  //         token:{type:String,require:true}
  //     }
  // ],

  todo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todoModel",
    },
  ],
});

userSchema.pre("save", function () {
  this.confirmPassword = undefined;
});
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
