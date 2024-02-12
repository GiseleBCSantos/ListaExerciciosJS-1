import { question } from "readline-sync";

let numero1 = Number(question("Insira o numero 1: "))
let numero2 = Number(question("Insira o numero 2: "))
let numero3 = Number(question("Insira o numero 3: "))

let soma_dois_primeiros = numero1 + numero2
let diferenca_dois_ultimos = numero2 - numero3

console.log(`
---------------------------------
Os números inseridos foram:
Primeiro número: ${numero1}
Segundo número: ${numero2}
Terceiro número: ${numero3}

Soma dos dois primeiros --> ${soma_dois_primeiros}
Diferença dos dois últimos --> ${diferenca_dois_ultimos}
---------------------------------
`)