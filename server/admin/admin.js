const form = document.getElementsByTagName("form")[0];
const interfaceAccount = document.getElementById("account");

const showUserAccountSpecifications = async (e) => {
    e.preventDefault();
    let inputEmail = document.getElementById("input-email").value;
    
    await getUserAccountApi({email : inputEmail});
}

const getUserAccountApi = async (email) => {

    const options = {
        method:"POST",
        headers: new Headers({'content-type' : 'application/json'}),
        body: JSON.stringify(email)
    }

    try {
        await fetch("http://localhost:3030/api/searchUser" , options)
        .then(res => res.json())
        .then(data => listAccount(data))
    } catch (error){
        console.log("ERROR " + error);
    }
}

const listAccount =  (account) => {
    const password = hiddenPassword(account.password);

    interfaceAccount.innerHTML = `
        <div class="account">
            <h3>Email : ${account.email}</h3>
            <h3>Password : ${password}</h3>
        </div>
    `
}

const hiddenPassword = (password) => {
    const maskedPassword = password.replace(/./g , '*');
    return maskedPassword
}

form.addEventListener("submit" , showUserAccountSpecifications);