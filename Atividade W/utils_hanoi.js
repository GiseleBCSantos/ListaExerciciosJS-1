import { get_number_in_range, get_random_in_range, get_text, print } from "../io.utils.js";

export function show_menu(torreR, torreG, torreB){
    print(`
${show_towers(torreR, torreG, torreB)}

>> Escreva a operacao desejada indicando a torre origem e a torre destino (Ex.: RG da torre R para a torre G): 
`)
}

export function show_towers(torreR, torreG, torreB){
    print(`
Torre R: |${show_tower(torreR)}
Torre G: |${show_tower(torreG)}
Torre B: |${show_tower(torreB)}
`)
}

export function show_tower(torre){
    let string = ''
    for (let element of torre){
        string += ' ' + element + ' '
    }
    while (string.length <= 24){
        string += ' - '
    }
    return string
}

export function fill_towers(torreR, torreG, torreB, nivel){
    let opcoes = 'RGB'
    if (nivel === 1){
        for (let i=0;i<9;i++){
            torreR.push(opcoes[get_random_in_range(0, 2)])
        }
    }
    else if(nivel === 2){
        let quantidade_itens = get_number_in_range(1, 9,"Quantos itens voce deseja que tenha nas 3 torres? (1 a 9): ")
        for(let i=0;i<=quantidade_itens;i++){
            torreR.push(opcoes[get_random_in_range(0, 2)])
            torreG.push(opcoes[get_random_in_range(0, 2)])
            torreB.push(opcoes[get_random_in_range(0, 2)])
        }
    }
    else{
        for(let i=0;i<8;i++){
            torreR.push(opcoes[get_random_in_range(0, 2)])
            torreG.push(opcoes[get_random_in_range(0, 2)])
            torreB.push(opcoes[get_random_in_range(0, 2)])
        }
    }
}

export function run_game(torreR, torreG, torreB, operacoes_jogador, nome){
    while (! torreCompleta(torreR, 'r') || ! torreCompleta(torreG, 'g') || ! torreCompleta(torreB, 'b')){
        limpar_tela()
        print("Jogador atual: "+ nome)
        show_menu(torreR, torreG, torreB)
        let operacao = receber_operacao('>> ')
        mover(operacao, torreR, torreG, torreB)
        operacoes_jogador.push(operacao)
    }
    show_towers(torreR, torreG, torreB)
}


export function mover(operacao, torreR, torreG, torreB){
    if (operacao.length == 2 && checar_letra(operacao[0]) && checar_letra(operacao[1])){
        if (operacao[0].toLowerCase() === 'r'){
            operacao[1].toLowerCase() === 'g' ? mover_elementos(torreR, torreG) : mover_elementos(torreR, torreB)
        }
        else if (operacao[0].toLowerCase() === 'g'){
            operacao[1].toLowerCase() === 'r' ? mover_elementos(torreG, torreR) : mover_elementos(torreG, torreB)
        }
        else{
            operacao[1].toLowerCase() === 'r' ? mover_elementos(torreB, torreR) : mover_elementos(torreB, torreG)
        }
    }
    else{
        print("Operacao invalida!")
    }
}

export function mover_elementos(torre1, torre2){
    if (torre1.length > 0){
        let elemento = torre1.pop()
        torre2.push(elemento)
    }
}

export function receber_operacao(text){
    let operacao = get_text(text)
    let check = true
    if (operacao.length === 2){
        for (let letra of operacao){
            if (! checar_letra(letra)){
                check = false
            }
        }
    }
    else{
        print("Operacao invalida!")
        return receber_operacao(text)
    }

    return check ? operacao : receber_operacao(text)
}

function checar_letra(letra){
    return /[rgb]/.test(letra.toLowerCase())
}

export function torreCompleta(torre, letra){
    if (torre.length === 0){
        return false
    }
    for (let elemento of torre){
        if (elemento.toLowerCase() !== letra){
            return false
        }
    }
    return true
}

export function limpar_tela(){
    console.clear()
}

export function press_enter_to_continue(){
    let _ = get_text('ENTER to continue...')
}

export function get_quantidade_jogadas(vetor){
    return vetor.length
}

export function get_campeao(qnt_jogador1, nome_jogador1, qnt_jogador2, nome_jogador2){
    if (qnt_jogador1 === qnt_jogador2){
        return "Houve um empate! Joguem novamente para desempatar."
    }
    let ganhador = qnt_jogador1 > qnt_jogador2 ? nome_jogador2 : nome_jogador1
    return `E o campeao é o jogador: ${ganhador}!`
    
}

export function choose_level(){
    let level_text = `
Escolha um nivel para jogar:
1) Nivel Basico
2) Nivel Intermediario
3) Nivel Avancado
`
    let level = get_number_in_range(1, 3,level_text)
    return level
}