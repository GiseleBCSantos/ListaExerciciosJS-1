import { get_text, get_valid_number } from "../io.utils.js";

function main(){
    const investimento_mensal = get_valid_number('Insira qual será seu investimento mensal: ')
    const juros_mensal = get_valid_number('Insira qual será o juros mensal: ')
    let ano = 1
    let saldo_total = 0
    
    while (true){

        const saldo_anual = calcular_saldo_anual(investimento_mensal, juros_mensal, saldo_total)
        saldo_total = saldo_anual
        console.log(`Saldo do investimento após ${ano} ano: R$ ${saldo_anual.toFixed(2)}`)

        const continuar_programa = get_text('Deseja processar mais um ano (s/n)? ')
        
        if (continuar_programa.toLowerCase() === 'n'){
            break
        }
        ano++
    }

}

function calcular_saldo_anual(investimento_mensal, juros_mensal, valor_inicial=0){
    let saldo_total = valor_inicial
    let meses = 12
    while (meses > 0){
        saldo_total = investimento_mensal + saldo_total*(juros_mensal/100 + 1)
        meses--
    }
    return saldo_total
}

main()