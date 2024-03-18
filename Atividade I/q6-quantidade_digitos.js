import { get_valid_number } from "../io.utils.js";

function main(){
    console.log('>>> N° de dígitos de um número <<<')

    const numero = get_valid_number('Insira um número para saber a quantidade de dígitos dele: ')

    console.log(`O número ${numero} possui ${obter_quantidade_digitos(numero)} digitos.`)

}

function obter_quantidade_digitos(number){
    let numero_digitos = 0
    while (number > 1){
        number = number/10
        numero_digitos++
    }
    return numero_digitos
}


function obter_quantidade_digitos_string(number){
    number = number.toString()
    let tamanho = number.length
    return tamanho

}

main()