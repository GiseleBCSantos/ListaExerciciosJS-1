import {get_valid_number} from '../io.utils.js'

function main(){
    console.log('>> Multiplicação de números <<')

    const multiplicador = get_valid_number('Insira um número para multiplicar: ')
    const multiplicando = get_valid_number('Quantas vezes deseja que o numero anterior seja multiplicado? ')

    const resultado = multiplicar(multiplicador, multiplicando)

    console.log(`${multiplicador} x ${multiplicando} = ${resultado}`)
}

function multiplicar(number1, number2){
    let resultado = 0
    let vezes_multiplicado = 0
    while (number2 > vezes_multiplicado){
        resultado += number1
        vezes_multiplicado++
    }
    return resultado
}

main()