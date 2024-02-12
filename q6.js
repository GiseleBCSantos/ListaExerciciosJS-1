import { question } from "readline-sync";

let velocidade_kmh = Number(question("Insira uma velocidade em km/h para ser convertida em m/s: "))

let velocidade_ms = (velocidade_kmh / 3.6).toFixed(2)

console.log(`>> A velocidade ${velocidade_kmh} km/h convertida em m/s é igual a ${velocidade_ms} m/s <<`)
