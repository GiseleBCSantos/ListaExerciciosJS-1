import { get_valid_number, validar_data } from "./io.utils.js";

function main(){
    const dia_nascimento = get_valid_number('Insira o dia em que voce nasceu: ')
    const mes_nascimento = get_valid_number('Insira o mes em que voce nasceu: ')
    const ano_nascimento = get_valid_number('Insira o ano em que voce nasceu: ')

    const dia_atual = get_valid_number('Insira o dia atual: ')
    const mes_atual = get_valid_number('Insira o mes atual: ')
    const ano_atual = get_valid_number('Insira o ano atual: ')

    const idade = calcular_idade(dia_nascimento, mes_nascimento, ano_nascimento, dia_atual, mes_atual, ano_atual)

    console.log(`
    Uma pessoa que nasceu em ${dia_nascimento}/${mes_nascimento}/${ano_nascimento} terá, no dia ${dia_atual}/${mes_atual}/${ano_atual}, ${idade}.`)

}


function calcular_idade(dia_nasc, mes_nasc, ano_nasc, dia_atual, mes_atual, ano_atual){

    if (validar_data(dia_nasc, mes_nasc, ano_nasc) && validar_data(dia_atual, mes_atual, ano_atual)){
        
        let dias_totais_vida = (dia_atual + mes_atual*30 + ano_atual*365) - (dia_nasc + mes_nasc*30 + ano_nasc*365)

        let anos_vida = Math.floor(dias_totais_vida / 365)
        let resto = dias_totais_vida % 365
        let meses_vida = Math.floor(resto / 30)
        let dias_vida = resto % 30

        return ` ${anos_vida} anos, ${meses_vida} meses e ${dias_vida} dias de vida.`


    }
    else{
        return 'Data inválida!'
    }
}

main()