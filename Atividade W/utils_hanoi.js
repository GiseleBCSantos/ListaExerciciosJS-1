import { get_random_in_range, get_text, print } from "../io.utils.js";

export function show_menu(torreR, torreG, torreB){
    print(`
R: ${show_tower(torreR)}
G: ${show_tower(torreG)}
B: ${show_tower(torreB)}

>> Escreva a operacao desejada indicando a torre origem e a torre destino (Ex.: RG da torre R para a torre G): 
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

export function fill_tower(torre){
    let opcoes = 'RGB'
    for (let i=0;i<9;i++){
        torre.push(opcoes[get_random_in_range(0, 2)])
    }
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
    let _ = question()
}