import { question } from "readline-sync";

let valor_m = Number(question("Insira um valor em metros: "))

let valor_km = Math.floor(valor_m / 1000)
let resto_m = valor_m - (valor_km * 1000)

console.log(`
>>> Conversor de metros em km <<<
${valor_m} m --> ${valor_km} km e ${resto_m} m.`)