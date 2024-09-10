import { get_number_in_range, get_random_in_range, get_text, print } from "../io.utils.js";

// Funcoes basicas para o funcionamento do jogo
export function choose_level(){
    limpar_tela()
    let level_text = `
Escolha um nivel para jogar:
1) Nivel Basico
2) Nivel Intermediario
3) Nivel Avancado
`
    let level = get_number_in_range(1, 3,level_text)
    return level
}

export function fill_towers(torreR, torreG, torreB, nivel){
    let opcoes = 'RGB'
    if (nivel === 1){
        for (let i=0;i<9;i++){
            torreR.push(opcoes[get_random_in_range(0, 2)])
        }
        if (achar_letra_faltante(torreR)){
            torreR.splice(get_random_in_range(0, 9), 1, achar_letra_faltante(torreR))
        }
    }
    else if(nivel === 2){
        let quantidade_itens = get_number_in_range(5, 7,"Quantos itens voce deseja que tenha nas 3 torres? (5 a 7): ")
        preencher_torres(torreR, torreG, torreB, quantidade_itens, opcoes)
    }
    else{
        preencher_torres(torreR, torreG, torreB, 8)
    }
}

export function preencher_torres(torreR, torreG, torreB, quantidade, opcoes){
    for(let i=0;i<quantidade;i++){
        torreR.push(opcoes[get_random_in_range(0, 2)])
        torreG.push(opcoes[get_random_in_range(0, 2)])
        torreB.push(opcoes[get_random_in_range(0, 2)])
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
    let qnt_jogadas_jogador = get_quantidade_jogadas(operacoes_jogador)
    print(`${nome} ganhou em ${qnt_jogadas_jogador} jogadas.`)
}

export function show_menu(torreR, torreG, torreB){
    print(`
${show_towers(torreR, torreG, torreB)}


>> Escreva a operacao desejada indicando a torre origem e a torre destino (Ex.: RG da torre R para a torre G): 
`)
}

export function show_towers(torreR, torreG, torreB){
    return `
Torre    | 1  2  3  4  5  6  7  8  9 
\x1b[31mTorre R: |\x1b[0m${show_tower(torreR)}
\x1b[32mTorre G: |\x1b[0m${show_tower(torreG)}
\x1b[34mTorre B: |\x1b[0m${show_tower(torreB)} 
`
}

export function show_tower(torre){
    let string = ''
    for (let element of torre){
        string += ` ${element.toLowerCase() === 'r' ? '\x1b[31m' : element.toLowerCase() === 'g' ? '\x1b[32m' : '\x1b[34m'}` + element + '\x1b[0m '
    }
    return string
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
        if (torre2.length < 9){
            let elemento = torre1.pop()
            torre2.push(elemento)
        }
    }
}

export function get_campeao(qnt_jogador1, nome_jogador1, qnt_jogador2, nome_jogador2){
    print(`
Jogador ${nome_jogador1}: ${qnt_jogador1} pontos
Jogador ${nome_jogador2}: ${qnt_jogador2} pontos`)
    if (qnt_jogador1 === qnt_jogador2){
        return "Houve um empate! Joguem novamente para desempatar."
    }
    let ganhador = qnt_jogador1 > qnt_jogador2 ? nome_jogador2 : nome_jogador1
    return `E o campeao é o jogador: ${ganhador} com ${menor_num(qnt_jogador1, qnt_jogador2)} pontos!`
}


// Corrigir erro de nao aparecer uma letra
function achar_letra_faltante(vetor){
    if (! vetor.includes('R')){
        return 'R'
    }
    if (! vetor.includes('G')){
        return 'G'
    }
    if (! vetor.includes("B")){
        return "B"
    }
    return null
}

// Condicao para finalizacao do game
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

// Up na visualização
export function limpar_tela(){
    console.clear()
}

export function press_enter_to_continue(){
    let _ = get_text('ENTER to continue...')
}

// Utils
export function get_quantidade_jogadas(vetor){
    return vetor.length
}

export function menor_num(num1,num2){
    return num1 < num2 ? num1 : num2
}

export function get_nome_valido(text){
    let nome = get_text(text)
    return nome.length > 0 ? nome : get_nome_valido(text)
}