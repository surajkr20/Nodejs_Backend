
const express = require("express");
const app = express();
const morgon = require('morgan');

app.use(morgon('dev')) // third party middleware - logger

// for reading req.body data
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))   // for rendering static files on the frontend

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

app.post('/get-form-data', (req, res)=>{
    console.log(req.body);
    res.send("data received..")
})

app.listen(3000, (req, res) =>{
    console.log("server started")
})

