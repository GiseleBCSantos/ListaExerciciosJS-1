import { question } from "readline-sync";

let meses_inseridos = Number(question('Insira uma quantidade de meses: '))

let anos = Math.floor( meses_inseridos / 12 )
let meses_restantes = meses_inseridos % 12

console.log(`${meses_inseridos} equivale a ${anos} anos e ${meses_restantes} meses.`)