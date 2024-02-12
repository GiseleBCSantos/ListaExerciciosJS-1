import { question } from "readline-sync";

let horas = Number(question("Insira um valor para as horas: "))
let minutos = Number (question("Insira um valor para os minutos: "))


let horas_para_minutos = horas*60
let minutos_totais = horas_para_minutos + minutos

console.log(`
Conversão para minutos de ${horas} horas e ${minutos} minutos: 
${horas} horas >> ${horas_para_minutos} minutos + ${minutos} minutos = ${minutos_totais} minutos`)