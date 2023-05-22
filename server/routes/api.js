const express = require("express");
const router = express.Router();
const accounts = require("../model/account");
const cors = require("cors");

const options = {
    origin: "http://localhost:3030"
}

router.use(cors(options));

router.get("/all" , (req , res) => {
    res.json(JSON.stringify(accounts.getAll()));
})

router.post("/register" , express.json() , (req , res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    let form = {email , password};

    res.json(JSON.stringify(accounts.registerAccount(form)));
})

module.exports = router;

