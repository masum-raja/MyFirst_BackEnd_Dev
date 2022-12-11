require('dotenv').config()
const mongoose=require("mongoose");

// mongoose.set('strictQuery', true);


const connection=mongoose.connect(process.env.mongo_url)

module.exports={connection}