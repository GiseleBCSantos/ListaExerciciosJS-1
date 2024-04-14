import {get_valid_number, get_number} from '../io.utils.js'

function main(){
    const qntd_numeros = get_valid_number('Insira a quantidade de numeros que voce vai usar: ')
    let soma = 0
    let contador = 0

    while (contador < qntd_numeros){
        const numero = get_number('Insira um numero para obter media e soma: ')
        soma += numero
        contador++
    }

    const media = calcular_media(qntd_numeros, soma)

    console.log(`A soma dos ${qntd_numeros} numeros inseridos é igual a ${soma} e a média é igual a ${media.toFixed(2)}.`)
}

function calcular_media(qntd_numeros, soma){
    return soma/qntd_numeros
}

main()