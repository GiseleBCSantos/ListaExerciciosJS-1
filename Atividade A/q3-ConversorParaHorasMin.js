import { question } from "readline-sync";

let minutos = Number(question("Insira um valor em minutos para ser convertido em horas e minutos: "))


let horas = Math.floor(minutos/60)
let resto_minutos = minutos % 60


console.log(`
${minutos} minutos convertido para horas fica: ${horas}h:${resto_minutos}min.`)