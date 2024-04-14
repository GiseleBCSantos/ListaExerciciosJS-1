import { get_integer_number } from "../io.utils.js"

function main(){
    const numero_para_fatorial = get_integer_number('Insira um numero para saber seu fatorial: ')

    const fatorial_numero = calcular_fatorial(numero_para_fatorial)
    
    console.log(`O fatorial de ${numero_para_fatorial} é ${fatorial_numero}.`)
}

function calcular_fatorial(number){
    let fatorial_numero = 1
    for (let i = 1; i <= number; i++){
        fatorial_numero *= i
    }
    return fatorial_numero
}



main()