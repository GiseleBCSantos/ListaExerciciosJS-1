import { get_valid_number } from "./io.utils.js";

function main(){
    console.log(">>>> VALIDAÇÃO DE DATAS <<<<")

    const diaInserido = get_valid_number('Insira um dia: ')
    const mesInserido = get_valid_number('Insira um mes: ')
    const anoInserido = get_valid_number('Insira um ano: ')

    const data_valida = texto_validar_data(validar_data(diaInserido, mesInserido, anoInserido))

    console.log(`Data inserida: ${diaInserido}/${mesInserido}/${anoInserido}
    >>> A data é ${data_valida}`)
}

function validar_data(dia, mes, ano){
    if (dia > 31 || mes > 12){
        return false
    }
    else if (dia > 30 && (mes === 4 || mes === 6 || mes === 9 || mes === 11)){
        return false
    }
    else if (mes === 2 && dia > 29){
        return false
    }
    else if (mes === 2 && dia > 28 && ano % 4 !== 0){
        return false
    }

    return true
}


function texto_validar_data(value){
    if (value === true){
        return 'válida'
    }
    else{
        return 'não é válida.'
    }
}

main()