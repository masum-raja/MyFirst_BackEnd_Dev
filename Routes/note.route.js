const {Router}=require("express")

const {NoteModel}=require("../Models/note.model")

const noteRoute=Router();

/*****************  GET METHOD  **************************/

noteRoute.get("/",async(req,res)=>{
    try{
      const data=await NoteModel.find();
      res.status(200).send(data)
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

/*****************  POST METHOD  **************************/

noteRoute.post("/create",async(req,res)=>{
    const payload=req.body
    try{
        const note= new NoteModel(payload)
        await note.save()
        res.status(200).send({message:"Note Created Successfully"})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

/*****************  PATCH METHOD  **************************/

noteRoute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    const userID=req.body.UserID
    try{
        const noteID=await NoteModel.findOne({_id:id})
        if(userID!==noteID.UserID){
            res.status(400).send({message:"Not Authorised"})
        }else{
            const note=await NoteModel.findByIdAndUpdate({_id:id},payload)
            res.status(200).send({message:"Note updated Successfully"})
        }
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

/*****************  DELETE METHOD  **************************/

noteRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    const userID=req.body.UserID
    try{
        const noteID=await NoteModel.findOne({_id:id})
        if(userID!==noteID.UserID){
            res.status(400).send({message:"Not Authorised"})
        }else{
            const deletedNote=await NoteModel.findByIdAndDelete({_id:id})
            res.status(200).send({message:"Note Deleted Successfully"})
        }
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

module.exports={noteRoute}