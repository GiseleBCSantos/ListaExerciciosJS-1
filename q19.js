import { question } from "readline-sync";

const PI = 3.14
let raio = Number(question("Insira o valor do raio da sua circunferencia: "))


let volume_circunferencia = (4 * PI * raio**3) / 3


console.log(`
Uma circunferência de raio ${raio} tem o volume igual a ${volume_circunferencia.toFixed(2)}.`)