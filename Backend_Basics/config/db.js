const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb+srv://suraj71308kumar:Suraj%407860@cluster0.bykbf.mongodb.net/').then(()=>{
    console.log("database connected");
})

module.exports = connection;