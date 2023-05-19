const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    validadeEmail(inputEmail);
    validadePassword(inputPassword);
    validadeConfirmPassword(inputConfirmPassword);
})


const validadeEmail = (input) => {
    let emailWithOutSpace = deleteWhiteSpace(input.value); 

    if(emailWithOutSpace === "") {
        console.log("Esse campo de email está vazio !");
        console.log("email :" + emailWithOutSpace);
    } else {
        if(checkEmail(emailWithOutSpace)) {
            console.log("Seu email é válido");
            console.log("email :" + emailWithOutSpace);
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

const validadePassword = (input) => {

    let passwordWithOutSpace = deleteWhiteSpace(input.value);

    if(passwordWithOutSpace === "") {
        console.log("Esse campo de senha está vazio !");
        console.log("senha :" + passwordWithOutSpace);

    } else {
        if(passwordWithOutSpace < 7) {
            console.log("Seu senha não válido");
            console.log("senha :" + passwordWithOutSpace);
        }else {
            console.log("Seu senha é válido");
            console.log("senha :" + passwordWithOutSpace);
        }
    }

    // Verificar se a sneha tem algum caratere maiusculo , minusculo , números e um caractere especial
}

const validadeConfirmPassword = (input) => {

    let passwordConfirmWithOutSpace = deleteWhiteSpace(input.value);

    if(passwordConfirmWithOutSpace === "") {
        console.log("Esse campo de confirmação de senha está vázio !");
        console.log("confirmação de senha : " + passwordConfirmWithOutSpace);
    } else {
        if(passwordConfirmWithOutSpace !== inputPassword.value) {
            console.log("As senhas não concidem!");
            console.log("confirmação de senha : " + passwordConfirmWithOutSpace);
        } else {
            console.log("Senhas concidem!");
            console.log("confirmação de senha : " + passwordConfirmWithOutSpace);
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


// Futuras features 
// Fazer a interface de login 

// - Retornar um email default para o proprietário desse email e dizer que o cadastro foi feito com sucesso
// - Conectar um backend com um banco de daods e armazenar esse login
// - verificação se o login ja existe e dizer que o usuario já tem uma conta