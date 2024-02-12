import { question } from "readline-sync";

const PI = 3.14
let raio = Number(question("Insira o valor do raio da sua circunferencia: "))


let cumprimento_circunferencia = 2 * PI * raio


console.log(`
Uma circunferência de raio ${raio} tem o cumprimento igual a ${cumprimento_circunferencia.toFixed(2)}.`)