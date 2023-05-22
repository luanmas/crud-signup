module.exports = {
    accounts : [
        {
            email : "luan123@gmail.com",
            password : "1234567",
        },
        {
            email : "vitor123@gmail.com",
            password : "3333333",
        },
        {
            email : "pedro123@gmail.com",
            password : "4444444",
        }
    ],

    getAll() {
        console.log(this.accounts);
        return this.accounts;
    },

    registerAccount(form) {
        this.accounts.push(form);
        console.log(this.accounts);
        return this.accounts;
    }
}