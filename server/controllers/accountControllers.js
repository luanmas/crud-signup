const Account = require("../model/account");

module.exports = {
    // accounts : [
    //     {
    //         email : "luan123@gmail.com",
    //         password : "1234567",
    //     },
    //     {
    //         email : "vitor123@gmail.com",
    //         password : "3333333",
    //     },
    //     {
    //         email : "pedro123@gmail.com",
    //         password : "4444444",
    //     }
    // ],

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

    // async deleteAccount(email , password) {
    //     for (let i = 0; i < this.accounts.length ; i++) {
    //         if(email === this.accounts[i].email && password === this.accounts[i].password) {
    //             this.accounts.splice(i , 1);
    //         }
    //     }
    //     return this.accounts;
    // }
}