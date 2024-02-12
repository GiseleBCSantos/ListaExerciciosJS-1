import { question } from "readline-sync";

let numero1 = Number(question("Insira o numero 1: "))
let numero2 = Number(question("Insira o numero 2: "))


let calculo = (numero1 + numero2) / (numero1 - numero2)

console.log(`A divisão da soma pela substração dos números ${numero1} e ${numero2} é de ${calculo}.`)