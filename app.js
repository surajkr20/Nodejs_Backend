
const express = require("express");
const app = express();
const morgon = require('morgan');

app.set("view engine", 'ejs')   // setup ejs files

// A middleware is a function that runs in between the request from the user and the final response from the server.

// This is a global middleware(app.use) — it runs for every route.
app.use((req, res, next) =>{
    // res.send("this is a middleware") // after execute this line no request goes next route
    const a = 2;
    const b = 4;
    console.log(a + b)
    return next();
})

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(3000, (req, res) =>{
    console.log("server started")
})

