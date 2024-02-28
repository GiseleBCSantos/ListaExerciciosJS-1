import {get_valid_number} from '../io.utils.js'

function main(){
    const nota1 = get_valid_number('Insira a primeira nota parcial do aluno: ')
    const nota2 = get_valid_number('Insira a segunda nota parcial do aluno: ')

    const media = calcular_media(nota1, nota2)
    const situacao_escolar = verificar_situacao_escolar(nota1, nota2, media)

    console.log(`
    >>>> BOLETIM <<<<
    
    >> Nota 1: ${nota1}
    >> Nota 2: ${nota2}
    >> Média: ${media}
    
    >> Situação: ${situacao_escolar}.`)

}


function calcular_media(number1, number2){
    return (number1 + number2) / 2
}

function verificar_situacao_escolar(nota1, nota2, media){
    if (media === 10){
        return 'Aprovado com Distinção'
    }
    else if (media >= 7){
        return 'Aprovado'
    }
    else{
        return 'Reprovado'
    }
}

main()