import { question } from "readline-sync";

let valor_km = Number(question("Insira um valor em km: "))

let valor_m = valor_km * 1000

console.log(`
>>> Conversor de km em metros <<<
${valor_km} km --> ${valor_m} m`)