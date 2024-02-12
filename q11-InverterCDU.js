import { question } from "readline-sync";

let numeroInserido = Number(question("Insira um numero para o calculo de centena + dezena + unidade: "))

let centena = Math.floor(numeroInserido/100)
let resto_centena = numeroInserido % 100
let dezena = Math.floor(resto_centena/10)
let unidade = resto_centena % 10

let numero_invertido = unidade*100 + dezena*10 + centena

console.log(`
Número inserido: ${numeroInserido}

Número invertido: ${numero_invertido}
`)