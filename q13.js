import { question } from "readline-sync";

let valor_inicial = Number(question("Insira um valor para saber o seu preco apos desconto: "))

let valor_com_desconto = valor_inicial * 0.7
let desconto = valor_inicial - valor_com_desconto

console.log(`
O valor inserido foi de: R$${valor_inicial};
O valor com desconto de 70% é de: R$${valor_com_desconto};
Você economizou R$${desconto} com a compra.`)