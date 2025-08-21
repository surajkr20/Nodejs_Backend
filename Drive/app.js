require('dotenv').config();
const express = require("express");
const app = express();
const UserRoute = require('./routes/user.routes');
app.set("view engine", 'ejs');

const port = process.env.PORT;
app.use('/user', UserRoute);

app.get('/', (req, res)=>{
    res.send("Home route")
})

app.listen(port, ()=>{
    console.log(`server listen at ${port}`)
})