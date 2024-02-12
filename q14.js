import { question } from "readline-sync";

const nota1 = Number(question("Insira a nota 1: "))
const peso1 = Number(question("Insira o peso 1: "))
const nota2 = Number(question("Insira a nota 2: "))
const peso2 = Number(question("Insira o peso 2: "))
const nota3 = Number(question("Insira a nota 3: "))
const peso3 = Number(question("Insira o peso 3: "))

let soma_dos_produtos = nota1*peso1 + nota2*peso2 + nota3*peso3
let soma_pesos = peso1 + peso2 + peso3

let media = soma_dos_produtos / soma_pesos

console.log(`
---- QUADRO DE NOTAS ----
Nota 1 = ${nota1}----Peso 1 = ${peso1}
Nota 2 = ${nota2}----Peso 2 = ${peso2}
Nota 3 = ${nota3}----Peso 3 = ${peso3}

Média ponderada das notas = ${media.toFixed(2)}
-------------------------`)