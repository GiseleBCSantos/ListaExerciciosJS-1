import { question } from "readline-sync";

let horas_inseridas = Number(question('Insira uma quantidade de horas: '))

let semanas = Math.floor(horas_inseridas / 168)
let resto_divisao_semanas = horas_inseridas % 168
let dias = Math.floor(resto_divisao_semanas / 24)
let horas_restantes = resto_divisao_semanas % 24

console.log(`
${horas_inseridas} horas é igual a:
${semanas} semanas
${dias} dias
${horas_restantes} horas.`)