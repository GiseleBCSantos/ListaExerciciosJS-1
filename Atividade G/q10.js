import {get_valid_number} from '../io.utils.js'

function main(){
    const nota1 = get_valid_number('Insira sua primeira nota: ')
    const nota2 = get_valid_number('Insira sua segunda nota: ')

    const media = calcular_media(nota1, nota2)
    const conceito = definir_conceito(media)
    const situacao = verificar_situacao(conceito)

    console.log(`
    **** BOLETIM ****
    
    >> Nota 1: ${nota1}
    >> Nota 2: ${nota2}
    
    >> Média: ${media.toFixed(2)}
    >> Conceito: ${conceito}
    >> Situação escolar: ${situacao}`)
}


function verificar_situacao(conceito){
    if (conceito === 'A' || conceito === 'B' || conceito === 'C'){
        return 'APROVADO'
    }
    else if (conceito === 'D' || conceito === 'E'){
        return 'REPROVADO'
    }
    else{
        return 'Notas inválidas'
    }
}


function definir_conceito(media){
    if (media > 10 || media < 0){
        return 'Notas inválidas'
    }
    else if (notas >= 9){
        return 'A'
    }
    else if (media >= 7.5){
        return 'B'
    }
    else if (media >= 6){
        return 'C'
    }
    else if (media >= 4){
        return 'D'
    }
    else if (media >= 0){
        return 'E'
    }
}


function calcular_media(nota1, nota2){
    return (nota1 + nota2) / 2
}

main()