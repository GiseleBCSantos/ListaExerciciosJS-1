import { get_integer_number } from "./io.utils.js";

function main(){
    const hora_inicio = get_integer_number('Insira a hora para o início do jogo: ')
    const minuto_inicio = get_integer_number('Insira o minuto para o início do jogo: ')

    const hora_fim = get_integer_number('Insira a hora para o fim do jogo: ')
    const minuto_fim = get_integer_number('Insira o minuto para o fim do jogo: ')

    let duracao_jogo = calcular_duracao(hora_inicio, minuto_inicio, hora_fim, minuto_fim)

    console.log(`
    >> Início do jogo: ${hora_inicio}h:${minuto_inicio}min
    >> Fim do jogo: ${hora_fim}h:${minuto_fim}min
    
    >> ${duracao_jogo}`)
}


function calcular_duracao(hora_inicio, minuto_inicio, hora_fim, minuto_fim){
    let inicio = hora_inicio*60 + minuto_inicio
    console.log(inicio)
    let fim = hora_fim*60 + minuto_fim
    console.log(fim)
    let tempo_jogo = 0

    if (hora_fim <= hora_inicio){
        inicio = 24*60 - (hora_inicio*60 + minuto_inicio)
        tempo_jogo = fim + inicio
    }
    else if (hora_fim > hora_inicio){
        tempo_jogo = fim - inicio
    }

    return `O jogo durou ${Math.floor(tempo_jogo / 60)} horas e ${tempo_jogo % 60} minutos`
}

main()