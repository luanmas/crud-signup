const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    email:String,
    password:String
})

const account = mongoose.model("account" , DataSchema);

module.exports = account;