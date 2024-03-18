import { question } from "readline-sync";

let idade_em_dias = Number(question('Insira quantos dias voce ja viveu: '))

let idade_anos = Math.floor(idade_em_dias / 365)
let resto_divisao_anos = idade_em_dias % 365

let idade_meses = Math.floor(resto_divisao_anos / 30)

let idade_dias = resto_divisao_anos % 30

console.log(`
Você já viveu por ${idade_em_dias} dias
Então você viveu por:
>> ${idade_anos} anos
>> ${idade_meses} meses
>> ${idade_dias} dias`)