import { question} from "readline-sync";

let segundos_inseridos = Number(question('Insira a quantidade de segundos desejada: '))

let horas = Math.floor(segundos_inseridos / 3600)
let resto_divisao_horas = segundos_inseridos % 3600
let minutos = Math.floor(resto_divisao_horas / 60)
let segundos_restantes = resto_divisao_horas % 60


console.log(`
${segundos_inseridos} segundos é igual a ${horas}H:${minutos}m:${segundos_restantes}s`)