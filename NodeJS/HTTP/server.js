const { error } = require('console')
const http=require('http')
const { hostname } = require('os')
const path = require('path')

// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write("<h1>Home Page</h1>")
//     }
//     else if(req.url=='/aboute'){
//         res.write("<h1>Abote Page</h1>")
//     }
//     res.end();
// })

// server.listen(3002)
// console.log("Server is running on port number 3002");



const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('Content-type','text/plain')
        res.end('Node server created by pappu: HOME PAGE')
    }
    else if(req.url=='/aboute'){
        res.statusCode=200;
        res.setHeader('Content-type','text/plain')
        res.end("Aboute Page")
    }
    else if(req.url=='/contact'){
        res.statusCode=200;
        res.setHeader('Content-type','text/plain')
        res.sendDate('Contact Page')
    }
    else if(req.url=='/products'){
        const options={
            hostname:'fakestoreapi.com',
            path:'/products/1',
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
    else{
        res.statusCode=500;
        res.setHeader('Content-type','text/plain')
        res.end('Server Down hai')
    }
})
const PORT=4003;

server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})




