const buttons = document.querySelectorAll("button");

const form = document.querySelectorAll("form")[0]

const nome = document.getElementById("name")
const password = document.getElementById("password")
const confirmation = document.getElementById("confirm-password")

form.addEventListener('submit', event => {


    if (!nome.value || !password.value || !confirmation.value) {
        alert("Preencha o campo vazio!")
    }
    else if (password.value.length < 8) {
        alert("Sua senha deve ter 8 caracteres!")
    }
    else if (password.value != confirmation.value) {
        alert("Suas senhas não se correspondem, corrija!")
    }
}
)

function random(numero) {
    return Math.floor(Math.random() * (numero + 1));
}

function colorChanger() {
    var str = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return str;
}

buttons.forEach(Element => Element.addEventListener('click', () => {
    document.body.style.backgroundColor = colorChanger();
}));

const divs = document.querySelectorAll("div");

divs.forEach(Element => Element.addEventListener('click', (event) => {
    event.target.style.backgroundColor = colorChanger();
}));