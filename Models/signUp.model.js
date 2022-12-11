const mongoose=require("mongoose");

const signUpSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
})

const SignUpModel=mongoose.model("auth",signUpSchema)

module.exports={SignUpModel}