import { get_number_in_range, get_random_in_range, print } from "./utils.js";

export const criar_vetor_aleatorio = (tamanho, min, max) => {
    let vetor = []

    for (let i=0;i<tamanho;i++){
        vetor.push(get_random_in_range(min, max))
    }

    return vetor
}

export const mostrar_valores_vetor = (vetor) => {
    let new_vetor = map(vetor, (elem) => elem)
    return new_vetor
}


export const map = (vetor, funcao) => {
    let new_vetor = []

    for (let i=0;i<vetor.length;i++){
        new_vetor.push(funcao(vetor[i]))
    }

    return new_vetor
}

export const reduce = (vetor, funcao) => {
    let count = 0

    for (let i=0;i<vetor.length;i++){
        count += funcao(vetor[i])
    }

    return count
}