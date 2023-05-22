const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit" , async (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");
    const inputConfirmPassword = document.getElementById("confirm-password");

    let email = await validadeEmail(inputEmail);
    let password = await validadePassword(inputPassword);

    if(validadeConfirmPassword(inputConfirmPassword , inputPassword)) {
        submitForm(email , password);
    }
})


const validadeEmail = async (input) => {
    let emailWithOutSpace = deleteWhiteSpace(input.value); 

    if(emailWithOutSpace === "") {
        console.log("Esse campo de email está vazio !");
        console.log("email :" + emailWithOutSpace);
    } else {
        if(checkEmail(emailWithOutSpace)) {
            console.log("Seu email é válido");
            console.log("email :" + emailWithOutSpace);
            return emailWithOutSpace;
        }else {
            console.log("Seu email não é válido");
        }
    }
}

const checkEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const validadePassword = async (input) => {

    let passwordWithOutSpace = deleteWhiteSpace(input.value);

    if(passwordWithOutSpace === "") {
        console.log("Esse campo de senha está vazio !");
        console.log("senha :" + passwordWithOutSpace);

    } else {
        if(passwordWithOutSpace.length < 7) {
            console.log("Seu senha não válido");
            console.log("senha :" + passwordWithOutSpace);
        }else {
            console.log("Seu senha é válido");
            console.log("senha :" + passwordWithOutSpace);
            return passwordWithOutSpace;
        }
    }

    // Verificar se a sneha tem algum caratere maiusculo , minusculo , números e um caractere especial
}

const validadeConfirmPassword = async (inputPasswordConfirm, inputPassword) => {

    let passwordConfirmWithOutSpace = deleteWhiteSpace(inputPasswordConfirm.value);
    let passwordWithOutSpace = deleteWhiteSpace(inputPassword.value);

    if(passwordConfirmWithOutSpace === "") {
        console.log("Esse campo de confirmação de senha está vázio !");
        console.log("confirmação de senha : " + passwordConfirmWithOutSpace);
        return false;
    } else {
        if(passwordConfirmWithOutSpace !== passwordWithOutSpace) {
            console.log("As senhas não concidem!");
            console.log("confirmação de senha : " + passwordConfirmWithOutSpace);
            return false;
        } else {
            console.log("Senhas concidem!");
            console.log("confirmação de senha : " + passwordConfirmWithOutSpace);
            return true;
        }
    }
}

const deleteWhiteSpace = (word) => {
    let arrayWord = word.split("");
    let arrayFilter = arrayWord.filter((letter) => {
        return letter !== " ";
    })
    let validatedWord = arrayFilter.join("");

    return validatedWord;
}

const submitForm = async (email , password) => {
    let account = {email , password};

    const options = {
        method:"POST",
        headers: new Headers({'content-type' : 'application/json'}),
        body: JSON.stringify(account)
    }

    await fetch("http://localhost:3030/api/register" , options)
    .then(() => {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    })
}


// Futuras features 
// Fazer a interface de login 

// - Retornar um email default para o proprietário desse email e dizer que o cadastro foi feito com sucesso
// - Conectar um backend com um banco de daods e armazenar esse login
// - verificação se o login ja existe e dizer que o usuario já tem uma conta