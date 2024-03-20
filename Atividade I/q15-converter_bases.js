import {get_number_in_range} from '../io.utils.js'

function main(){
    console.log('** CONVERSOR DE BASES **')
    let numero_decimal = get_number_in_range(0, 255, 'Insira um número entre 1 e 255 para ser convertido: ')

    let numero_binario = converter_para_binario(numero_decimal)
    let numero_hexadecimal = converter_para_hexadecimal(numero_decimal)

    console.log(numero_binario)
    console.log(numero_hexadecimal)
}


function converter_para_binario(number){
    let binario = ''
    while (number >= 1){
        binario += (number%2).toString()
        number = Math.floor(number/2)
    }
    return binario.split('').reverse().join('')
}

function converter_para_hexadecimal(number){
    let hexadecimal = ''
    while (number >= 15){
        if (number%16 === 10){
            hexadecimal += 'A'
            number = Math.floor(number/16)
        }
        else if (number%16 === 11){
            hexadecimal += 'B'
            number = Math.floor(number/16)
        }
        else if (number%16 === 12){
            hexadecimal += 'C'
            number = Math.floor(number/16)
        }
        else if (number%16 === 13){
            hexadecimal += 'D'
            number = Math.floor(number/16)
        }
        else if (number%16 === 14){
            hexadecimal += 'E'
            number = Math.floor(number/16)
        }
        else if (number%16 === 15){
            hexadecimal += 'F'
            number = Math.floor(number/16)
        }
        else{
            hexadecimal += Math.floor(number%16)
            number = Math.floor(number/16)
        }
        
    }
    return hexadecimal.split('').reverse().join('')
}

main()