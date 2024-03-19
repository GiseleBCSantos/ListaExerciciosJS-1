import { get_number_in_range, get_valid_number } from "../io.utils.js";

function main(){
    let pontos_jogador_1 = 0
    let pontos_jogador_2 = 0
    let contador = 1
    while (condicao_fim_partida(pontos_jogador_1, pontos_jogador_2)){
        let ponto_jogador = get_number_in_range(1, 2,`Insira o jogador que fez ponto n° ${contador}: `)

        ponto_jogador === 1 ? pontos_jogador_1++ : pontos_jogador_2++

        contador++

    }
    let vencedor = pontos_jogador_1 > pontos_jogador_2 ? 'Jogador 1 venceu !!!' : 'Jogador 2 venceu !!!'

    console.log(pontos_jogador_1, pontos_jogador_2)

    console.log(vencedor)
    
}


function condicao_fim_partida(pontos_jogador_1, pontos_jogador_2){
    let mais_pontos = pontos_jogador_1 > pontos_jogador_2 ? pontos_jogador_1 : pontos_jogador_2
    let menos_pontos = pontos_jogador_1 < pontos_jogador_2 ? pontos_jogador_1 : pontos_jogador_2

    if (pontos_jogador_1 >= 21 || pontos_jogador_2 >= 21){
        if (mais_pontos - menos_pontos >= 2)
        return false
    }
    return true
}

main()