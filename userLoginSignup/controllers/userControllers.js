const User=require('../models/userModel.js')

const home=(req,res)=>{
    res.send(`<h1>Home page <br/> Hello,Hows the Josh</h1>`)
}

const createUser=async(req,res)=>{
    // exttract user information from frontend
    try {
        const {name,email}=req.body

        //basic checks
        if(!name || !email){
            throw new Error("Name and Email is required")
        }
        const existAlready=User.findOne({email});
        if(existAlready){
            throw new Error("User already exist")
        }
        const newUser= await User.create({
            name,
            email
        })

        res.status(200).json({
            succsess:true,
            message:"User created succsesfully",
            newUser
        })
        
    } catch (error) {
        res.status(400).json({
            succsess:false,
            message:error.message
        })
    }
}

const login=async(req,res)=>{
    // extract information
        const {email}=req.body
    
        const user=await User.findOne({email}); 
        if(user){
            res.status(200).json({
                succsess:true,
                message:"User login succsesfully",
                user
            })
        }
        else{
            res.status(200).json({
                succsess:false,
                message:"please register first"
            })
        }

    
}

const getUsers=async(req,res)=>{
      const allUsers=await User.find({});
      if(allUsers){
        res.status(200).json({
            succcsess:true,
            allUsers
        })
      }
      else{
        res.send("No user found")
      }
}

const deleteUser=async(req,res)=>{
     try {

        const userId=req.params.id;
        const userToBeDelted=await User.findByIdAndDelete(userId)
        res.status(200).json({
            succcsess:true,
            message:"User deleted succsesfully",
            userToBeDelted
        })
        
     } catch (error) {
        res.status(400).json({
            succcsess:false,
            message:error.message
        })
     }
}

const editUser=async(req,res)=>{
    try {
        const userid=req.params.id;
        const updatedUser= await User.findByIdAndUpdate(userid,req.body)
        res.status(200).json({
            succcsess:true,
            message:"User updated succsesfully",
            updatedUser
        })
    } catch (error) {
        res.status(400).json({
            succcsess:false,
            message:error.message,
        })
    }
}

module.exports={home,createUser,login,getUsers,deleteUser,editUser}

