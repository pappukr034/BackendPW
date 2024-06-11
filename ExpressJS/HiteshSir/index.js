import app from './app.js'
import mongoose from 'mongoose'



(async ()=>{
  try{
    await mongoose.connect('mongodb://localhost:27017/');
    console.log("DB Coonected")
    app.on('error',(err)=>{
        console.log("Error in app",err)
    })

    app.listen(process.env.port || 3001,()=>{
        console.log(`App is running at ${port}`)
    })
  }
  catch(err){
      console.log("Error during DB Connection")
  }
})();