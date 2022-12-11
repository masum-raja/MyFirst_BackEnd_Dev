const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    Title:String,
    Note:String,
    Tags:String,
    UserID:String,
})

const NoteModel=mongoose.model("note",noteSchema);

module.exports={NoteModel}