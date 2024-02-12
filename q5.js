import { question } from "readline-sync";

let numeroInserido = Number(question("Insira um numero para o calculo de centena + dezena + unidade: "))

let centena = Math.floor(numeroInserido/100)
let resto_centena = numeroInserido % 100
let dezena = Math.floor(resto_centena/10)
let unidade = resto_centena % 10
let soma_cdu = centena + dezena + unidade

console.log(`O número ${numeroInserido} convertido é:
C = ${centena}
D = ${dezena}
U = ${unidade}

C + D + U = ${soma_cdu}`)