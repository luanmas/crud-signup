const btnAllAccounts = document.getElementById("all-accounts");
const interfaceAccount = document.getElementById("accounts");


const allAccount = async () => {
    try {
        await fetch("http://localhost:3030/api/all")
        .then(res => res.json())
        .then(data => listAccounts(data))
    } catch (error){
        console.log("ERROR "+ error);
    }
}

const listAccounts =  (accounts) => {
    accounts.forEach((acc) => {
        interfaceAccount.innerHTML += `
            <div class="account">
                <h3>Email : ${acc.email}</h3>
                <h3>Password : ${acc.password}</h3>
            </div>
        `
    })
}


btnAllAccounts,addEventListener("click" , allAccount);