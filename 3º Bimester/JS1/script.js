document.body.style.backgroundColor = "SteelBlue";

var num1 = Number(prompt("Digite um número:"))
var num2 = Number(prompt("Digite outro número:"))
var rslt = num1 + num2
alert(num1 + " + " + num2 + " = " + rslt)

var nome2 = prompt("Digite seu nome:")
var idade2 = Number(prompt("Digite sua idade:"))

document.write(`Atividade 1 - JavaScript - 3ºBimestre<br><br>Seu nome é: ${nome2}.<br>Sua idade é: ${idade2} anos.<br>Seu nome tem ${nome2.length} letras.<br>Seu nome em minúsculo é "${nome2.toLowerCase()}".<br>Seu nome em maiúsculo é "${nome2.toUpperCase()}".`)