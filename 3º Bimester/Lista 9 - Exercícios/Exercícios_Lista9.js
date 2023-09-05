function soma(x){
    if(x == 1){
        return 1
    } 
    else{
        return x + soma (x-1)
    }
}

console.log(soma(10))

let p1 = {
    nome: "Tavares",
    idade: 18,
    apresentar: function(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

p1.apresentar()

//ex1 - lista 9
function escreva(text){
    console.log(text)
}
escreva("Exercício 1")

//ex2 - lista 9
function soma(x,y){
    console.log("Ex2 - " + (x+y))
}
soma(5,4)

//ex3 - lista 9
function hora(){
    let data = new Date
    return("Ex3 e 4 - " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
}

//ex4 - lista 9
function mostrarHora(){
    console.log(hora())
}
mostrarHora()

//ex5 - lista 9
function quadrado(num){
    console.log("Ex5 - " + (num*num))
}
quadrado(4);

//ex6 - lista 9
function cubo(num){
    console.log("Ex6 - " + (num*num*num))
}
cubo(2);

//ex7 - lista 9
function potencia(num, expo){
    return Math.pow(num, expo)
}
console.log("Ex7 - " + potencia(4, 3))

//ex9 - lista 9
function imc(peso, altura){
    console.log("Ex89 - " + (peso/(altura*altura)))
}
imc(62, 1.74)


//ex1 - lista 10
class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    apresenta(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} e sou do sexo ${this.sexo}.`)
    }

}

let p2 = new Pessoa("Gabriel", 18, "Masculino");
p2.apresenta();

//ex2 - lista 10
class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    area(){
        console.log(this.altura*this.largura)
    }
}

let retangulo1 = new Retangulo(10, 5);
retangulo1.area();