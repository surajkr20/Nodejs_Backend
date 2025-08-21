const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    gender: String
})

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;