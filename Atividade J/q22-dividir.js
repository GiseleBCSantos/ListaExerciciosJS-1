import {get_valid_number} from '../io.utils.js'

function main(){
    console.log('>> Multiplicação de números <<')

    const divisor = get_valid_number('Insira um número para dividir: ')
    const dividendo = get_valid_number('Quantas vezes deseja que o numero anterior seja multiplicado? ')

    const quociente = dividir(divisor, dividendo)[0]
    const resto = dividir(divisor, dividendo)[1]


    console.log(`${divisor} / ${dividendo} = ${quociente} ${resto > 0 ? `e sobra ${resto} de resto` : ''}`)
}

function dividir(number1, number2){
    let resto = number1
    let quociente = 0
    while (resto >= number2){
        resto -= number2
        quociente++
    }
    return [quociente, resto]
}



main()