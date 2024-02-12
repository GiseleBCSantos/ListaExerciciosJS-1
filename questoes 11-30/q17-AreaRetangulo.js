import { question } from "readline-sync";

let base_retangulo = Number(question("Insira o valor da base do retangulo: "))
let altura_retangulo = Number(question("Insira a altura do retangulo: "))


let area_retangulo = base_retangulo * altura_retangulo


console.log(`
Um retangulo de base ${base_retangulo} e de altura ${altura_retangulo} tem a área igual a ${area_retangulo}.`)