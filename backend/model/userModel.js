const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    Username:{
    type:String,
    require:true
    },

    email:{
        type:String,
        require:true,
        unique:true
    },
    
    password:{
        type:String,
        require:true,
        
    },

    
    todo:[{
        type:mongoose.Schema.ObjectId,
        ref:"todoModel"
    }]

});

const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel;
