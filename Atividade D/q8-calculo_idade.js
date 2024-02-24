import { get_valid_number } from "./io.utils.js";

function main(){
    const diaAtual = get_valid_number('Insira o dia atual: ')
    const mesAtual = get_valid_number('Insira o mes atual: ')
    const anoAtual = get_valid_number('Insira o ano atual: ')

    const diaNasc = get_valid_number('Insira o dia que voce nasceu: ')
    const mesNasc = get_valid_number('Insira o mes que voce nasceu: ')
    const anoNasc = get_valid_number('Insira o ano que voce nasceu: ')



    let idade = calcular_idade(diaAtual, mesAtual, anoAtual, diaNasc, mesNasc, anoNasc)

    console.log(`
    >>>> CALCULO DE IDADE <<<<
    >> Estamos em ${diaAtual}/${mesAtual}/${anoAtual}
    >> Você nasceu em ${diaNasc}/${mesNasc}/${anoNasc}
    
    >> Você tem ${idade} anos.
    `)
}

function calcular_idade(dia_atual, mes_atual, ano_atual, dia_nasc, mes_nasc, ano_nasc){
    if (mes_atual >= mes_nasc && dia_atual >= dia_nasc){
        return ano_atual - ano_nasc
    }
    else{
        return (ano_atual - ano_nasc) -1
    }
}

main()