const express =require('express');
require('dotenv').config()
const app=express();
const cors=require('cors')

const connectDB=require('./config/db.js')


// conect DB
connectDB();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


const userRoutes=require('./routes/userRoutes.js')

app.use('/',userRoutes)

module.exports=app