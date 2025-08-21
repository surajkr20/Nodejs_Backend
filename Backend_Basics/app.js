const express = require("express");
const app = express();
const morgon = require('morgan');
const UserModel = require('./models/UserSchema');
const connection = require('./config/db');

app.use(morgon('dev')) // third party middleware - logger

// for reading req.body data
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// setup static files like - ejs
app.set("view engine", 'ejs')   // setup ejs files
app.use(express.static('public'))   // for rendering static files on the frontend

// This is a global middleware(app.use) — it runs for every route.
app.use((req, res, next) =>{
    return next();
    res.send("this is a middleware") // after execute this line no request goes next route
})

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/hello', (req, res,) =>{
    console.log(req.query);
    res.send("data send from form-1..")
})

// create users
app.post('/register', async (req, res)=>{
    const {username, email, password, gender} = req.body;

    const data = await UserModel.create({
        username: username,
        email: email,
        password: password,
        gender: gender
    })

    res.send(data);
})

// read users
app.get('/get-users', (req, res) =>{
    UserModel.find().then((user)=>{
        res.send(user)
    })
})

// update
app.get('/update', async (req, res) =>{
    
    await UserModel.findOneAndUpdate({
        _id: "68a665834eb42f468063f621"
    }, {
        username: "surajkr34"
    })

    res.send("user updated")
})

// delete user
app.get('/delete-user', async (req, res) =>{
    await UserModel.findOneAndDelete({
        username: "abhinav.bhardwaaj"
    })
    res.send("user deleted")
})

app.listen(3000, (req, res) =>{
    console.log("server started")
})

