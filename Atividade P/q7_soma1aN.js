import { get_integer_number } from "../io.utils.js"

function main(){
    const numero_limite = get_integer_number('Insira um numero para saber a soma de todos os numeros entre ele e 1: ')

    const soma_numeros = calcular_soma(numero_limite)
    
    console.log(`A soma de todos inteiros entre 1 e ${numero_limite} é de ${soma_numeros}.`)
}

function calcular_soma(number){
    let soma_numero = 0
    for (let i = 1; i <= number; i++){
        soma_numero += i
    }
    return soma_numero
}



main()