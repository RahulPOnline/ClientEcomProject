const http=require("http")

let server = http.createServer()

server.listen(5000,()=>{
    console.log("server started");
    
})