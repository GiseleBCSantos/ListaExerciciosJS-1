import { question } from "readline-sync";

let lado_quadrado = Number(question("Insira o valor do lado do seu quadrado: "))


let area_quadrado = lado_quadrado**2


console.log(`
Um quadrado de lado ${lado_quadrado} tem a área igual a ${area_quadrado}.`)