import { get_number } from "../io.utils.js";

function main(){

    const kg_maca = get_number('Quantos kg de maca voce quer? ')
    const kg_morango = get_number('Quantos kg de morango voce quer? ')

    const gasto_maca = get_preco('maca', kg_maca)
    const gasto_morango = get_preco('morango', kg_morango)

    const desconto = calcular_desconto(kg_maca, gasto_maca, kg_morango, gasto_morango)

    const valor_total = computar_preco(kg_maca, gasto_maca, kg_morango, gasto_morango, desconto)


    console.log(`
    >>>> Cestinha de compras <<<<
    
    >> ${kg_maca}kg de maçã:       R$ ${gasto_maca}
    >> ${kg_morango}kg de morango:    R$ ${gasto_morango}

    >> Desconto:           R$ ${desconto.toFixed(2)}
    >> Total a pagar:      R$ ${valor_total.toFixed(2)}
    `)


}


function computar_preco(kg_maca, gasto_maca, kg_morango, gasto_morango, desconto){
    return (gasto_maca + gasto_morango) - desconto
}


function calcular_desconto(kg_maca, gasto_maca, kg_morango, gasto_morango){
    if ((kg_maca + kg_morango > 8) || (gasto_maca + gasto_morango > 25)){
        return (gasto_maca + gasto_morango) *0.1
    }
    return 0
}


function get_preco(fruta, kg){
    if (fruta === 'maca'){
        if (kg <= 5){
            return kg*1.8
        }
        return kg*1.5
    }
    else if (fruta === 'morango'){
        if (kg <= 5){
            return kg*2.5
        }
        return kg*2.2
    }
}


main()