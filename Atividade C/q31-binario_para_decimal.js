import { question } from "readline-sync";

let binario_inserido = Number(question('Insira um numero binario de 4 digitos: '))

let primeiro_digito = Math.floor( binario_inserido / 1000)
let resto_primeira_divisao = binario_inserido % 1000

let segundo_digito = Math.floor( resto_primeira_divisao / 100 )
let resto_segunda_divisao = resto_primeira_divisao % 100

let terceiro_digito = Math.floor(resto_segunda_divisao / 10 )

let quarto_digito = resto_segunda_divisao % 10

let numero_decimal = (primeiro_digito * 2**3) + (segundo_digito * 2**2) + (terceiro_digito * 2**1) + (quarto_digito * 2**0)

console.log(`
Número em binário = ${binario_inserido}

Número em decimal = ${numero_decimal}
`)