const Account = require("../model/account");

module.exports = {

    async getAll(req , res) {
        const accounts = await Account.find();
        res.json(accounts);
    },

    async registerAccount(req , res) {
        let email = req.body.email;
        let password = req.body.password;
        let dataCreate;

        dataCreate = {
            email , password
        }

        const account = await Account.create(dataCreate);
        console.log(dataCreate);
        res.json(account);
    },

    async getUserAccount(req , res) {
        let email = req.body.email;

        const account = await Account.findOne({email : email});
        res.json(account);
    }

    // async deleteAccount(email , password) {
    //     for (let i = 0; i < this.accounts.length ; i++) {
    //         if(email === this.accounts[i].email && password === this.accounts[i].password) {
    //             this.accounts.splice(i , 1);
    //         }
    //     }
    //     return this.accounts;
    // }
}