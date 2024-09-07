import {question} from "readline-sync";
import {read, readFileSync} from 'fs'

export const get_number = (text) =>  Number(question(text));

export const get_positive_number = (text) => {
    const number = Number(question(text))
    return is_positive(number) ? number : get_positive_number(text)
}

export const is_positive = (number) => number > 0



export const get_random_in_range = (min, max) => {
    min= Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const get_number_in_range = (min, max, text) => {
    const number = get_number(text)
    return number >= min && number <= max ? number : get_number_in_range(min, max, text)
}

export const print = (text) => console.log(text)


export const criar_lista_random = (min, max, limite) => {
    lista = []
    for (let i=0;i<limite;i++){
        lista.push(get_random_number(min, max))
    }
    return lista
}

export const filter = (lista, funcao) => {
    lista = []
    for (let i=0;i<lista.length;i++){
        funcao(i, lista)
    }
    return lista
}


export const vetor_valido = vetor => vetor.lenght > 0

export const press_enter_to_continue = () => question("Press ENTER to continue...")

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function show_loading(text_before, text_after){
    console.log(text_before)
    await sleep(1000)
    console.log(text_after)
    await sleep(500)
}


export function carregar_arquivo(nome_arquivo){
    return readFileSync(nome_arquivo, 'utf-8')
}