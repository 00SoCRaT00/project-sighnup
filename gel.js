// Set Varibales

const myI1 = document.getElementById('hide3');

const myI2 = document.getElementById('hide2');

const Password1 = document.getElementById('password');

const Pasword2 = document.getElementById('password-2');

var x = 1;


myI1.onclick = function() {
    "use strick";

    if (x == 1) {
        myI1.setAttribute('class', 'far fa-eye')
        Pasword2.setAttribute('type', 'text')
        x++;
    } else {
        myI1.setAttribute('class', 'far fa-eye-slash')
        Pasword2.setAttribute('type', 'password')
        x--;
    }

}

myI2.onclick = function() {
    "use strick";

    if (x == 1) {
        myI2.setAttribute('class', 'far far fa-eye')
        Password1.setAttribute('type', 'text')
        x++;
    } else {
        myI2.setAttribute('class', 'far fa-eye-slash')
        Password1.setAttribute('type', 'password')
        x--;
    }

}