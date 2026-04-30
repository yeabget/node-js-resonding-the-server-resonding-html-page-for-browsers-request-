const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
    let path;
    if(req.url==='/'){
        path='./view/index.html'
    }
    else if(req.url==='/about'){
        path='./view/about.html'
    }
    else if(req.url==='/contact'){
        path='./view/contact.html'
    }
     else{
        path='./view/404.html'
     }
     fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)

        }
        else{
            res.end(data)
            console.log("responding to the request")
        }
     })
})
server.listen(3000,()=>{
    console.log("server is listning o the port 3000")
})