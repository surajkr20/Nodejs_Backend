
const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url == "/about"){
        console.log("hello i'm abhinav bhardwaj")
    }
    if(req.url == "/contact"){
        console.log("i'm alian, i have not contact details")
    }
    res.end("request heated on the server");
})

server.listen(3000, (req, res) =>{
    console.log("server staretd")
})

