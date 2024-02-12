import { question } from "readline-sync";

let numero_a = Number(question('Insira o numero A: '))
let numero_b = Number(question('Insira o numero B: '))
let numero_c = Number(question('Insira o numero C: '))

let formula_r = (numero_a + numero_b)**2

let formula_s = (numero_b + numero_c)**2

let formula_d = (formula_r + formula_s) / 2

console.log(`O resultado da fórmula D é ${formula_d}.`)