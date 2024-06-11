
const http=require('http')
const hostname = require('os')
const path = require('path')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(`<h1>Welcome to men and women dummy data</h1>`)
    }
    else if(req.url=='/men'){
        const options={
            hostname:'fakestoreapi.com',
            path:'/products',
            method:'GET'
        }
        
        const apiReq=http.request(options,(apiRes)=>{
            apiRes.on('data',(data)=>{
                res.statusCode=200;
                res.setHeader('Content-type','application/json')
                res.end(data.toString())
            })
        })
        
        apiReq.on('error',(error)=>{
            console.log(error)
        })
        apiReq.end()
    }
})



const PORT=8088
server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})