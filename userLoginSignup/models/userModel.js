const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:[20,"Name should be below 20 char"]
    },
    email:{
        type:String,
        unique:true
    },
   
},{timestamp:true})


module.exports=mongoose.model("User",userSchema)