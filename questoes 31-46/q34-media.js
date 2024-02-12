import { question } from "readline-sync";

let numero1 = Number(question("Insira o primeiro numero: "))
let numero2 = Number(question("Insira o segundo numero: "))
let numero3 = Number(question("Insira o terceiro numero: "))

let soma_numeros = numero1 + numero2 + numero3
let media = soma_numeros / 3
let media_ajustada = media.toFixed(2)

console.log(`A média dos números ${numero1}, ${numero2} e ${numero3} é igual a ${media_ajustada}.`)