let name = prompt("What is your name?")
let favoriteColor = prompt("What is your favorite color?")

var result = (`Your name is ${name} and your favorite color is ${favoriteColor}.`)

var changes = document.querySelector("#person")

changes.innerText = result

changes.style.color = favoriteColor
changes.style.fontSize = "50px"

changes.style.textAlign = "center"