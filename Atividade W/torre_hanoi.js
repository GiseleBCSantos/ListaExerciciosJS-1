import { get_number_in_range, get_text, print } from "../io.utils.js"
import { fill_towers, limpar_tela, press_enter_to_continue, get_quantidade_jogadas, get_campeao, run_game, choose_level, get_nome_valido} from "./utils_hanoi.js"

function main(){
    let jogo_on = true

    while (jogo_on){
        const torreR = []
        const torreG = []
        const torreB = []
    
        let operacoes_jogador_1 = []
        let operacoes_jogador_2 = []
    
        let nivel = choose_level()
    
        fill_towers(torreR, torreG, torreB, nivel)
    
        let nome_jogador1 = get_nome_valido("Qual seu nome? ")
        run_game([...torreR], [...torreG], [...torreB], operacoes_jogador_1, nome_jogador1)
        press_enter_to_continue()
    
        limpar_tela()
        let nome_jogador2 = get_nome_valido("Qual seu nome? ")
        run_game([...torreR], [...torreG], [...torreB], operacoes_jogador_2, nome_jogador2)
        press_enter_to_continue()
    
        limpar_tela()
        let ganhador = get_campeao(get_quantidade_jogadas(operacoes_jogador_1), nome_jogador1, get_quantidade_jogadas(operacoes_jogador_2), nome_jogador2)
        print(ganhador)

        let reiniciar_jogo = get_number_in_range(1, 2, "Deseja jogar novamente? (1 - Sim) (2 - Nao) \n>> ")
        if (reiniciar_jogo === 2){
            jogo_on = false
        }
    }




}

main()