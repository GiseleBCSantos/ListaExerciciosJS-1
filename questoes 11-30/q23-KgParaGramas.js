import { question } from "readline-sync";

let valor_kg = Number(question("Insira um valor em kg: "))

let valor_g = valor_kg * 1000

console.log(`
>>> Conversor de kg em gramas <<<
${valor_kg} kg --> ${valor_g} g`)