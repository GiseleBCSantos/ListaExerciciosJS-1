import { question } from "readline-sync";

let primeiro_numerador = Number(question('Insira o numerador da primeira fracao: '))
let primeiro_denominador = Number(question('Insira o denominador da primeira fracao: '))

let segundo_numerador = Number(question('Insira o numerador da segunda fracao: '))
let segundo_denominador = Number(question('Insira o denominador da segunda fracao: '))

let numerador_soma_fracoes;
let denominador_soma_fracoes;


if (primeiro_denominador === segundo_denominador){
    numerador_soma_fracoes = primeiro_numerador + segundo_numerador
    denominador_soma_fracoes = primeiro_denominador

    console.log(`A soma de ${primeiro_numerador}/${primeiro_denominador} e de ${segundo_numerador}/${segundo_denominador} é igual a ${numerador_soma_fracoes}/${denominador_soma_fracoes}.`)
}
else{
    console.log(`Insira denominadores iguais!`)
}
