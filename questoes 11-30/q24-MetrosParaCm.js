import { question } from "readline-sync";

let valor_m = Number(question("Insira um valor em metros: "))

let valor_cm = valor_m * 100

console.log(`
>>> Conversor de metros em centímetros <<<
${valor_m} m --> ${valor_cm} cm`)