import { question } from "readline-sync";

let minutos_inseridos = Number(question("Insira uma quantidade em minutos: "))

let dias = Math.floor(minutos_inseridos / 1440)
let resto_divisao_dias = minutos_inseridos % 1440
let horas = Math.floor(resto_divisao_dias / 60)
let minutos_restantes = resto_divisao_dias % 60


console.log(`
${minutos_inseridos} minutos equivale a:
>> ${dias} dias,
>> ${horas} horas e
>> ${minutos_restantes} minutos.`)