import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send('server started')
})

app.get('/instagram',(req,res)=>{
    res.send('You have visted instaram')
})


export default app