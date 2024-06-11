const http=require('http')
const { hostname } = require('os')
const path = require('path')

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