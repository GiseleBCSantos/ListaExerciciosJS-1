import {get_number_in_range, get_valid_number} from '../io.utils.js'

function main(){
    while(true){
        const numero_inserido = get_number_in_range(0, 999, 'Insira um número para ser convertido em número romano: ')
        const numero_em_romano = converter_decimal_para_romano(numero_inserido)
    
        console.log(`${numero_inserido} convertido para romano é ${numero_em_romano}.`)

        if (numero_inserido === 0){
            break
        }
    }

}

function converter_decimal_para_romano(number){
    let txt_romano = ''
    while (number > 0){
        if (number >= 500){
            txt_romano += 'D'
            number -= 500
        }
        else if (number >= 100){
            if (number === 499){
                txt_romano += 'ID'
                number -= 499
            }
            else{
                txt_romano += 'C'
                number -= 100
            }
        }
        else if (number >= 50){
            if (number === 99){
                txt_romano += 'IC'
                number -= 99
            }
            else{
                txt_romano += 'L'
                number -= 50
            }
        }
        else if (number >= 10){
            if (number === 49){
                txt_romano += 'IV'
                number -= 49
            }
            else{
                txt_romano += 'X'
                number -= 10
            }
        }
        else if (number >= 5){
            if (number === 9){
                txt_romano += 'IX'
                number -= 9
            }
            else{
                txt_romano += 'V'
                number -= 5
            }
        }
        else if (number >= 1){
            if (number === 4){
                txt_romano += 'IV'
                number -= 4
            }
            else{
                txt_romano += 'I'
                number -= 1
            }
        }
    }
    return txt_romano
}

main()