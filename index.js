require('dotenv').config()
const express=require("express")
const cors = require('cors')

const {connection}=require("./Config/db")
const {signUp}=require("./Routes/signUp.route")
const {signIn}=require("./Routes/signIn.route")
const {noteRoute}=require("./Routes/note.route")
const {auth}=require("./MiddleWare/authentication")

const app=express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.use("/signUp",signUp)
app.use("/signIn",signIn)
app.use(auth)
app.use("/notes",noteRoute)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log({message:"DB Connection Successfully"})
    }catch(err){
        console.log(err)
        console.log({message:"DB Connection Fail"})
    }
    console.log({message:`listning on port ${process.env.port}`})
})