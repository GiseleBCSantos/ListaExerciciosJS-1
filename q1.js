import { question } from "readline-sync";

// Entrada
let velocidade_ms = Number(question("Insira uma velocidade em m/s para ser convertida em km/h: "))

//Processamento
let velocidadekmh = (velocidade_ms * 3.6).toFixed(2)

//Saida
console.log(`>> A velocidade ${velocidade_ms}m/s convertida em km/h é igual a ${velocidadekmh}km/h <<`)
