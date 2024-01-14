const express = require("express");
const router = express.Router();
const accounts = require("../controllers/accountControllers");
const cors = require("cors");

const options = {
    origin: "http://localhost:3030"
}

router.use(cors(options));

router.get("/all" , accounts.getAll);
router.post("/register" , accounts.registerAccount);
router.post("/searchUser" , accounts.getUserAccount);

router.post("/register" , express.json() , (req , res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    let form = {email , password};

    res.json(JSON.stringify(accounts.registerAccount(form)));
})

router.delete("/delete" , express.json() , (req , res) => {
    let email = req.body.email;
    let password = req.body.password;

    res.json(JSON.stringify(accounts.deleteAccount(email , password)));
}) 

module.exports = router;

