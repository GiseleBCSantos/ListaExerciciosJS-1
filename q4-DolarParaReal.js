import { question } from "readline-sync";

const cotacao_dolar = Number(question("Quanto o dolar esta valendo hoje: "))
let valor_em_dolar = Number(question("Insira um valor em dolar para ser convertido para real: "))

let valor_em_real = valor_em_dolar * cotacao_dolar

console.log(`
Valor do dólar hoje: ${cotacao_dolar} reais;
$${valor_em_dolar} dólares = R$${valor_em_real} reais.`)