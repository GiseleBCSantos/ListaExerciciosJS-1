import {get_number} from '../io.utils.js'

function main(){
    let tipo_carne = get_number('Insira a carne desejada: \n1 - File\n2 - Alcatra\n3 - Picanha\n>>> ')
    const peso = get_number('Insira quantos kg vai levar: ')

    let pagamento = get_number('Voce deseja pagar com o cartao Tabajara? (1 - sim | 2 - nao) ')

    const valor_carne = calcular_preco_carne(tipo_carne, peso)
    const desconto_cartao = calcular_desconto_cartao(pagamento, valor_carne)

    const valor_a_pagar = calcular_valor_total(valor_carne, desconto_cartao)


    tipo_carne = converter_tipo_carne(tipo_carne)
    pagamento = converter_pagamento(pagamento)

    console.log(`
    >>>> CUPOM FISCAL <<<<
    
    >> Tipo de carne:      ${tipo_carne}
    >> Peso:               ${peso}kg

    >> Preço total:        R$${valor_carne}
    >> Tipo de pagamento:  ${pagamento}
    >> Desconto:           R$ ${desconto_cartao.toFixed(2)}
    
    >> Valor a pagar:      R$${valor_a_pagar.toFixed(2)}
    `)


}


function calcular_valor_total(valor_carne, desconto){
    return valor_carne - desconto
}


function calcular_desconto_cartao(pagamento, valor){
    if (pagamento === 1){
        return valor*0.05
    }
    return 0
}


function converter_tipo_carne(value){
    if (value === 1){
        return 'Filé'
    }
    else if (value === 2){
        return 'Alcatra'
    }
    else if (value === 3){
        return 'Picanha'
    }
}


function converter_pagamento(value){
    if (value === 1){
        return 'Pagamento feito com cartão Tabajara'
    }
    else if (value === 2){
        return 'Pagamento feito sem cartão Tabajara'
    }
}


function calcular_preco_carne(tipo, kg){
    if (tipo === 1){
        if (kg <= 5){
            return kg*4.9
        }
        return kg*5.8
    }
    else if (tipo === 2){
        if (kg <= 5){
            return kg*5.9
        }
        return kg*6.8
    }
    else{
        if (kg <= 5){
            return kg*6.9
        }
        return kg*7.8
    }
}


main()