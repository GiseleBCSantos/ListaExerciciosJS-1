import { question } from "readline-sync";

let temperatura_celsius = Number(question("Insira uma temperatura em graus celsius: "))

let temperatura_fahrenheit = (9 * temperatura_celsius + 160) / 5


console.log(`
>>> Conversor de temperaturas <<<
Temperatura Celsius: ${temperatura_celsius}
Temperatura Fahrenheit: ${temperatura_fahrenheit.toFixed(2)}
`)