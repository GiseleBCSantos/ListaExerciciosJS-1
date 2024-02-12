import { question } from "readline-sync";

let temperatura_fahrenheit = Number(question("Insira uma temperatura em graus fahrenheit: "))

let temperatura_celsius = (5 * temperatura_fahrenheit - 160) / 9


console.log(`
>>> Conversor de temperaturas <<<
Temperatura Fahrenheit: ${temperatura_fahrenheit}
Temperatura Celsius: ${temperatura_celsius.toFixed(2)}
`)