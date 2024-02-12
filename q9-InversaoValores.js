import { question } from "readline-sync";

let numero1 = Number(question("Insira o numero 1: "))
let numero2 = Number(question("Insira o numero 2: "))

console.log(`
Antes da inversão: 
Número 1 = ${numero1}
Número 2 = ${numero2}`)

let variavel_de_inversao = numero1

numero1 = numero2
numero2 = variavel_de_inversao

console.log(`
Depois da inversão: 
Número 1 = ${numero1}
Número 2 = ${numero2}`)