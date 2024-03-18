import { question } from "readline-sync";

let base_triangulo = Number(question("Insira o valor da base do triangulo: "))
let altura_triangulo = Number(question("Insira a altura do triangulo: "))


let area_triangulo = (base_triangulo * altura_triangulo) / 2


console.log(`
Um triângulo de base ${base_triangulo} e de altura ${altura_triangulo} tem a área igual a ${area_triangulo}.`)