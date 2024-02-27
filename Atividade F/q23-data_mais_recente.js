import {get_valid_number, validar_data} from './io.utils.js';

function main(){
    const dia_data1 = get_valid_number('Insira o dia da primeira data: ')
    const mes_data1 = get_valid_number('Insira o mes da primeira data: ')
    const ano_data1 = get_valid_number('Insira o ano da primeira data: ')

    const dia_data2 = get_valid_number('Insira o dia da segunda data: ')
    const mes_data2 = get_valid_number('Insira o mes da segunda data: ')
    const ano_data2 = get_valid_number('Insira o ano da segunda data: ')

    const data_mais_recente = verificar_data_mais_recente(dia_data1, mes_data1, ano_data1, dia_data2, mes_data2, ano_data2)

    console.log(`
    >>>> Verificador de datas <<<<
    
    >> Primeira data: ${dia_data1}/${mes_data1}/${ano_data1}
    >> Segunda data: ${dia_data2}/${mes_data2}/${ano_data2}
    
    >> ${data_mais_recente}.
    `)



}


function verificar_data_mais_recente(dia1, mes1, ano1, dia2, mes2, ano2){
    if (validar_data(dia1, mes1, ano1) && validar_data(dia2, mes2, ano2)){
        if (ano1 > ano2){
            return 'A primeira data é a mais recente'
        }
        else if (mes1 > mes2){
            return 'A primeira data é a mais recente'
        }
        else if (dia1 > dia2){
            return 'A primeira data é a mais recente'
        }
        else{
            return 'A segunda data é a mais recente'
        }
    }
    else{
        return 'Formato de data inválido!'
    }
}

main()