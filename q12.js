import { question } from "readline-sync";

let salario = Number(question("Insira o seu salario atual para ser feito o calculo do aumento: "))

let salario_com_aumento_25 = salario * 1.25

console.log(`
Seu salário antigo era de ${salario}, mas após um reajuste de 25% aumentou para ${salario_com_aumento_25}.`)