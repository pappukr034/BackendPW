const app=require('./app.js')

const port=process.env.PORT || 5001

app.listen(port,()=>{
    console.log(`App is running at localhost:${port}`);
})