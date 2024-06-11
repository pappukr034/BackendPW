const http=require('http')

const options={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}

const apiReq=http.request(options,(apiRes)=>{
    apiRes.on('data',(data)=>{
        console.log("data",data.toString())
    })
})

apiReq.on('error',(error)=>{
    console.log(error)
})
apiReq.end()