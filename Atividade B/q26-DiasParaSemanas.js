import { question } from "readline-sync"

let numero_dias = Number(question('Insira um numero de dias: '))

let dias_para_semanas = Math.floor(numero_dias/7)
let resto_dias = numero_dias % 7

console.log(`${numero_dias} convertido para semanas é igual a ${dias_para_semanas} semanas e sobram ${resto_dias} dias.`)