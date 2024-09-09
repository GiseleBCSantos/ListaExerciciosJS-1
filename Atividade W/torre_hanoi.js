import { get_text, print } from "../io.utils.js"
import { torreCompleta, fill_towers, show_menu, receber_operacao , mover, limpar_tela, press_enter_to_continue, get_quantidade_jogadas, get_campeao, run_game, choose_level} from "./utils_hanoi.js"

function main(){
    const torreR = []
    const torreG = []
    const torreB = []

    let operacoes_jogador_1 = []
    let operacoes_jogador_2 = []

    let nivel = choose_level()

    fill_towers(torreR, torreG, torreB, nivel)

    let nome_jogador1 = get_text("Qual seu nome? ")
    run_game([...torreR], [...torreG], [...torreB], operacoes_jogador_1, nome_jogador1)
    let qnt_jogadas_jogador1 = get_quantidade_jogadas(operacoes_jogador_1)
    print(`${nome_jogador1} ganhou em ${qnt_jogadas_jogador1} jogadas.`)
    press_enter_to_continue()

    limpar_tela()
    let nome_jogador2 = get_text("Qual seu nome? ")
    run_game([...torreR], [...torreG], [...torreB], operacoes_jogador_2, nome_jogador2)
    let qnt_jogadas_jogador2 = get_quantidade_jogadas(operacoes_jogador_2)
    print(`${nome_jogador2} ganhou em ${qnt_jogadas_jogador2} jogadas.`)
    press_enter_to_continue()

    let ganhador = get_campeao(qnt_jogadas_jogador1, nome_jogador1, qnt_jogadas_jogador2, nome_jogador2)
    print(ganhador)




}

main()