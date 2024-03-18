import { question } from "readline-sync";

let idade_anos = Number(question('Insira quantos anos voce tem: '))
let idade_meses = Number(question('Insira quantos meses voce tem, fora a quantidade de anos: '))
let idade_dias = Number(question('Insira a quantidade de dias que voce tem, fora os anos e meses: '))

let idade_em_dias = idade_dias + idade_meses*30 + idade_anos*365

console.log(`Você já viveu ${idade_em_dias} dias.`)