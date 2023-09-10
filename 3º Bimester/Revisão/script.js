class Pessoa {
  constructor(nome, idade, notaPt, notaMt, notaWeb) {
    this.nome = nome;
    this.idade = idade;
    this.notaPt = notaPt;
    this.notaMt = notaMt;
    this.notaWeb = notaWeb;
  }

  calcularMedia() {
    const quantidadeNotas = 3;

    return ((this.notaPt + this.notaMt + this.notaWeb) / quantidadeNotas).toFixed(2);
  }

  calcularIdade(ano) {
    return ano - Number(new Date().getFullYear()) + this.idade;
  }
}

let pessoa = new Pessoa(
  prompt('Qual é o seu nome?'),
  Number(prompt('Qual é sua idade?')),
  Number(prompt('Qual foi sua nota em Português?')),
  Number(prompt('Qual foi sua nota em Matemática?')),
  Number(prompt('Qual foi sua nota em Desenvolvimento WEB?'))
);

let ano = Number(prompt('Digite um ano futuro para saber a sua idade:'));

let exibeAnoFuturo = (`Em ${ano} você terá: `);

document.querySelector("#nome").innerText = pessoa.nome;
document.querySelector("#idade").innerText = pessoa.idade;
document.querySelector("#anoFuturo").innerText = exibeAnoFuturo;
document.querySelector("#idadeFutura").innerText = pessoa.calcularIdade(ano) + " anos";
document.querySelector('#notaPt').innerText = pessoa.notaPt;
document.querySelector('#notaMt').innerText = pessoa.notaMt;
document.querySelector('#notaWeb').innerText = pessoa.notaWeb;
document.querySelector('#media').innerText = pessoa.calcularMedia();

let cor = prompt('Qual é a sua cor favorita? (Em inglês)');

let textos = document.querySelectorAll('h2');

textos.forEach((texto) => {
  texto.style.color = cor;
})

document.getElementsByTagName('tr')[0].style.backgroundColor = cor;

let numerosSeparados = prompt('Digite 9 números separados por um espaço " ":').split(' ');

for (index = 0; index < numerosSeparados.length; ++index) {
  document.getElementsByClassName('numero')[index].innerText = numerosSeparados[index];
}