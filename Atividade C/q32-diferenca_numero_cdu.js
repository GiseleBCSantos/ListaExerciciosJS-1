import { question } from "readline-sync";

let numero_inserido = Number(question("Insira um numero: "))

let centena = Math.floor(numero_inserido/100)
let resto_centena = numero_inserido % 100
let dezena = Math.floor(resto_centena/10)
let unidade = resto_centena % 10

let numero_invertido = unidade*100 + dezena*10 + centena

let diferenca = numero_inserido - numero_invertido

console.log(`A diferença entre ${numero_inserido} e ${numero_invertido} é de ${diferenca}.`)