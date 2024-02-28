import { get_number } from "../io.utils.js";
import { question } from "readline-sync";

function main(){
    const tipo_combustivel = question('Qual combustivel voce deseja? (A - Álcool | G - Gasolina) ').toUpperCase()
    
    if (tipo_combustivel !== 'A' && tipo_combustivel !== 'G'){
        main()
    }
    
    const litros_vendidos = get_number('Quantos litros voce deseja comprar? ')
    
    
    const preco_com_desconto = calcular_preco_com_desconto(tipo_combustivel, litros_vendidos)
    
    console.log(`Você precisa pagar R$ ${preco_com_desconto.toFixed(2)}.`)
}


function calcular_preco_com_desconto(combustivel, litros){
    
    if (combustivel == 'A'){
        return calcular_desconto(1.9, litros, 3, 5) 
    }
    return calcular_desconto(2.5, litros, 4, 6)
}




function calcular_desconto(valor_litro, litros, perc_menos_20, perc_mais_20){
    if (litros <= 20){
        return litros* (valor_litro * (1 - perc_menos_20/100))
    }
    return litros* (valor_litro * (1 - perc_mais_20/100))
}


main()