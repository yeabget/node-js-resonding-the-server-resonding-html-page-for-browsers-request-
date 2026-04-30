const fs=require('fs')
const http=require('http')
const server=http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
    fs.readFile("./view/index.html",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
        res.end(data);
        console.log("server is responding")
        }
    })
})
server.listen(3000,()=>{
    console.log('server is listining port 3000')
});