
const express = require("express");
const app = express();

app.get("/about", (req,res) =>{
    res.send("this is about page")
})

app.get('/profile', (req, res) =>{
    res.send("getting profile")
})

app.listen(3000, (req, res) =>{
    console.log("server started")
})

