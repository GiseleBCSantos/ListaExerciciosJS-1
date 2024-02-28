import { question } from "readline-sync";

function main(){
    console.log('>>> INTERROGATÓRIO <<<')
    console.log(">> Responda com apenas 's' para sim e 'n' para não")
    const pergunta1 = get_resposta_interrogatorio('Telefonou para a vitima? ')
    const pergunta2 = get_resposta_interrogatorio("Esteve no local do crime? ")
    const pergunta3 = get_resposta_interrogatorio('Mora perto da vítima? ')
    const pergunta4 = get_resposta_interrogatorio("Devia para a vitima? ")
    const pergunta5 = get_resposta_interrogatorio('Ja trabalhou com a vitima? ')

    const culpabilidade = verificar_culpabilidade(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)

    console.log(`Você é ${culpabilidade}.`)
}


function verificar_culpabilidade(resposta1, resposta2, resposta3, resposta4, resposta5){
    if (resposta1 == 's' && resposta2 == 's' && resposta3 == 's' && resposta4 == 's' && resposta5 == 's'){
        return 'Assassino'
    }
    else if (verificacao_completa_3_respostas(resposta1, resposta2, resposta3, resposta4, resposta5)){
        return 'Cúmplice'
    }
    else if (resposta1 == 'n' && resposta2 == 'n' && resposta3 == 'n' && resposta4 == 'n' && resposta5 == 'n'){
        return 'Inocente'
    }
    return 'Suspeito'
    

}


function verificacao_completa_3_respostas(resposta1, resposta2, resposta3, resposta4, resposta5){
    if (verificar_3_respostas(resposta1, resposta2, resposta3) || verificar_3_respostas(resposta1, resposta2, resposta4) || verificar_3_respostas(resposta1, resposta2, resposta5) || verificar_3_respostas(resposta1, resposta3, resposta5) || verificar_3_respostas(resposta1, resposta3, resposta4) || verificar_3_respostas(resposta1, resposta4, resposta5) || verificar_3_respostas(resposta2, resposta3, resposta4) || verificar_3_respostas(resposta2, resposta3, resposta5) || verificar_3_respostas(resposta3, resposta4, resposta5) ){
        return 'Cúmplice'
    }
}



function verificar_3_respostas(resp1, resp2, resp3){
    if (resp1 == 's' && resp2 == 's' && resp3 == 's'){
        return true
    }
    return false
}


function get_resposta_interrogatorio(text){
    let resposta = question(text).toLowerCase()
    if (resposta === 's' || resposta === 'n'){
        return resposta
    }
    get_resposta_interrogatorio(text)
}


main()