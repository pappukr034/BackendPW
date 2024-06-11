
 const express=require('express')

 const app=express();

const PORT=5001;

app.get('/',(req,res)=>{
    res.send('Server is creted by Pappu')
})

app.listen(PORT,()=>{
    console.log(`app is running at localhos:${PORT}`)
})