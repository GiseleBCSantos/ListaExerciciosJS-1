import { print } from "../io.utils.js"
import { torreCompleta, fill_tower, show_tower, show_menu, receber_operacao , mover, limpar_tela} from "./utils_hanoi.js"

function main(){
    const torreR = []
    const torreG = []
    const torreB = []

    fill_tower(torreR)
    // show_tower(torreR)

    while (! torreCompleta(torreR, 'r') || ! torreCompleta(torreG, 'g') || ! torreCompleta(torreB, 'b')){
        limpar_tela()
        show_menu(torreR, torreG, torreB)
        let operacao = receber_operacao('>> ')
        mover(operacao, torreR, torreG, torreB)
    }

}

main()