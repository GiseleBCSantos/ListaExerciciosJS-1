import { get_valid_number } from "../io.utils.js";

function main(){
    const numero_inserido = get_valid_number('Insira um número para escolher  um dia da semana: ')

    const dia_semana = verificar_dia_semana(numero_inserido)

    console.log(`
    Você inseriu o número ${numero_inserido}
    Dia da semana: ${dia_semana}.`)



}


function verificar_dia_semana(number){
    if (number === 1){
        return 'Domingo'
    }
    else if (number ===2){
        return 'Segunda'
    }
    else if (number === 3){
        return 'Terça'
    }
    else if (number === 4){
        return 'Quarta'
    }
    else if(number === 5){
        return 'Quinta'
    }
    else if (number === 6){
        return 'Sexta'
    }
    else if (number === 7){
        return 'Sábado'
    }
    return 'Valor inválido'
}

main()
