import {get_number } from '../io.utils.js'

function main(){
    let avaliacao_otimo = 0
    let avaliacao_bom = 0
    let avaliacao_regular = 0
    let avaliacao_pessimo = 0
    let soma_idades = 0
    let qntd_participantes = 0

    while (true){
        const idade = get_number('Insira sua idade: ')
        if (idade === -1){
            break
        }
        qntd_participantes++
        soma_idades += idade

        const opiniao = get_opiniao('Insira sua opinião (1-ótimo | 2-bom | 3-regular | 4-péssimo) --> ')

        if (opiniao === -1){
            break
        }

        if (opiniao === 1){
            avaliacao_otimo += 1
        }
        if (opiniao === 2){
            avaliacao_bom += 1
        }
        if (opiniao === 3){
            avaliacao_regular += 1
        }
        if (opiniao === 4){
            avaliacao_pessimo += 1
        }
    }

    const idade_media = soma_idades/qntd_participantes

    console.log(`
    ${qntd_participantes} pessoas participaram da pesquisa, tendo como idade média ${idade_media.toFixed(2)}.
    ${avaliacao_regular} pessoas disseram que o filme era regular
    ${((avaliacao_bom/qntd_participantes)*100).toFixed(2)} % dos participantes falaram que o filme era bom.`)
 
}


function get_opiniao(text) {
    const opiniao = get_number(text)
    if (opiniao == -1 || opiniao === 1 || opiniao === 2 || opiniao === 3 || opiniao === 4) {
        return opiniao
    }
    console.log('Valor inválido!')
    return get_canal_valido(text)
}

main()