const jwt=require("jsonwebtoken")
require('dotenv').config();

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        const decoded=jwt.verify(token,process.env.private_key)
        if(decoded){
            const UserID=decoded.UserID
            req.body.UserID=UserID
            next()
        }else{
            res.status(400).send({message:"unauthorized! plase logIn"})
        }
    }else{
        res.status(400).send({message:"unauthorized! plase logIn"})
    }
}

module.exports={auth}