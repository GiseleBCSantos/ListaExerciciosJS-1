import { question } from "readline-sync";

let anos_fumando = Number(question('Insira a quantidade de anos que voce ja fumou: '))
let cigarros_dia = Number(question('Insira quantos cigarros voce fuma por dia: '))
const preco_cigarro = Number(question('Insira quanto custa um cigarro: '))

let cigarros_fumados = anos_fumando * cigarros_dia * 365
let dinheiro_gasto = (cigarros_fumados * preco_cigarro).toFixed(2);

console.log(`Você já fumou ${cigarros_fumados} cigarros na sua vida e gastou um total de R$ ${dinheiro_gasto} reais.`);