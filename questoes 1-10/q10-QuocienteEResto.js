import { question } from "readline-sync";

let numero1 = Number(question("Insira o numero 1: "))
let numero2 = Number(question("Insira o numero 2: "))

let quociente = Math.floor(numero1 / numero2)
let resto = numero1 % numero2

console.log(`
Resultados da divisão entre ${numero1} e ${numero2}:
Quociente: ${quociente}
Resto: ${resto}
`)