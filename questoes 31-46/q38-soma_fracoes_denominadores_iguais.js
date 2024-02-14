import { question } from "readline-sync";

let primeiro_numerador = Number(question('Insira o numerador da primeira fracao: '))
let primeiro_denominador = Number(question('Insira o denominador da primeira fracao: '))

let segundo_numerador = Number(question('Insira o numerador da segunda fracao: '))
let segundo_denominador = Number(question('Insira o denominador da segunda fracao: '))

let numerador_soma_fracoes = primeiro_numerador + segundo_numerador
let denominador_soma_fracoes;


if (primeiro_denominador === segundo_denominador) {
    denominador_soma_fracoes = primeiro_denominador

    console.log(`A soma de ${primeiro_numerador}/${primeiro_denominador} e de ${segundo_numerador}/${segundo_denominador} é igual a ${numerador_soma_fracoes}/${denominador_soma_fracoes}.`)
}
else {
    denominador_soma_fracoes = calcularMMC(primeiro_denominador, segundo_denominador)

    console.log(`A soma de ${primeiro_numerador}/${primeiro_denominador} e de ${segundo_numerador}/${segundo_denominador} é igual a ${numerador_soma_fracoes}/${denominador_soma_fracoes}.`)
}

function calcularMMC(denominador1, denominador2) {
    let lista_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 27, 29, 31, 37];
    let lista_divisores = [];
    let mmc = 1

    while (denominador1 > 1 && denominador2 > 1) {

        for (let i = 0; i <= lista_primos.length; i++) {

            while (denominador1 % lista_primos[i] === 0 || denominador2 % lista_primos[i] === 0) {
                if (denominador1 % lista_primos[i] === 0 && denominador2 % lista_primos[i] === 0) {
                    denominador1 = denominador1 / lista_primos[i]
                    denominador2 = denominador2 / lista_primos[i]
                    lista_divisores.push(lista_primos[i])
                }

                else if (denominador1 % lista_primos[i] === 0 || denominador2 % lista_primos[i] === 0) {
                    if (denominador1 % lista_primos[i] === 0) {
                        denominador1 = denominador1 / lista_primos[i]
                        lista_divisores.push(lista_primos[i])
                    }
                    else {
                        denominador2 = denominador2 / lista_primos[i]
                        lista_divisores.push(lista_primos[i])
                    }
                }
            }
        }
    }

    for (let i = 0; i < lista_divisores.length; i++){
        mmc *= lista_divisores[i]
    }

    return mmc

}


