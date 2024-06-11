const mongoose=require('mongoose')


const connectDB=async()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then((conn)=>{
        console.log("DB Connected succsesfull")
    })
    .catch((err)=>{
      console.log("Eroor in DB Connection")
    }) 
}

module.exports=connectDB