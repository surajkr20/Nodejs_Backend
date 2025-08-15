const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    fullname: {
        first_name: String,
        last_name: String,
    },
    email: String, unique,
    password: String,
    Adhar_no: Number, unique,
    Bank_details: {
        bank_holder_name: String,
        IFSC_code: String,
        Branch_name: String,
        Account_no: Number,
    },
    Address: {
        State: String,
        District: String,
        Village: String,
    }
})

const AdminModel = mongoose.model("Admin", AdminSchema);
module.exports = AdminModel;