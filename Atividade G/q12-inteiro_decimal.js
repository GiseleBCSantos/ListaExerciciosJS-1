import {get_number} from '../io.utils.js'

function main(){
    const numero = get_number('Insira um número para saber se é inteiro ou decimal: ')

    const tipo = verificar_inteiro_decimal(numero)

    console.log(`O número ${numero} é ${tipo}.`)
}


function verificar_inteiro_decimal(number){
    if (number - Math.floor(number) > 0){
        return 'decimal'
    }
    return 'inteiro'
}


main()