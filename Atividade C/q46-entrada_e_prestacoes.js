import { question } from "readline-sync";

let valor_total = Number(question("Insira o valor total do produto: "))

let prestacoes = Math.floor(valor_total / 3)
let entrada = valor_total - (prestacoes*2)

console.log(`
Valor total do produto: R$ ${valor_total.toFixed(2)}
>> Entrada: R$ ${entrada.toFixed(2)}
>> 2x Prestações: R$ ${prestacoes.toFixed(2)}`)