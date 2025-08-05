
const express = require("express");
const app = express();
const morgon = require('morgan');

app.use(morgon('dev')) // third party middleware - logger

app.set("view engine", 'ejs')   // setup ejs files

// A middleware is a function that runs in between the request from the user and the final response from the server.

// This is a global middleware(app.use) — it runs for every route.
app.use((req, res, next) =>{
    return next();
    res.send("this is a middleware") // after execute this line no request goes next route
})

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.render('about')
})

app.listen(3000, (req, res) =>{
    console.log("server started")
})

