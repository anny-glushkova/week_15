function check() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordRepeat = document.getElementById("password-repeat");
    let remember = document.getElementById("remember");
    let user = document.getElementById("name").value;
    
    document.getElementById("errorMessage").innerHTML = "";
    if (name.value == "") {
        document.getElementById("errorMessage").innerHTML += "Вы не указали почту <br>";
    }
    if (surname.value == "") {
        document.getElementById("errorMessage").innerHTML += "Вы не указали почту <br>";
    }
    if (email.value == "") {
        document.getElementById("errorMessage").innerHTML += "Вы не указали почту <br>";
    }
    if (password.value == "") {
        document.getElementById("errorMessage").innerHTML += "Вы не указали пароль <br>";
    }
    if (passwordRepeat.value == "") {
        document.getElementById("errorMessage").innerHTML += "Вы не ввели проверку пароля <br>";
    }
    if (password.value != passwordRepeat.value) {
        document.getElementById("errorMessage").innerHTML += "Пароли не совпадают <br>";
    }
    else {
        document.getElementById("errorMessage").innerHTML += `Добро пожаловать, ${user}! <br>`;
        // alert (`Добро пожаловать, ${user}!`);
    }
}