import {get_random_in_range} from './utils.js'

export function criar_vetor_aleatorio(vetor, tamanho, min, max){
    const novo_vetor = []

    for (let i=0;i<tamanho;i++){
        novo_vetor.push(get_random_in_range(min, max))
    }

    return novo_vetor
}

export function mostrar_valores_vetor(vetor){
    if (vetor.length === 0){
        console.log("Vetor vazio, inicialize um vetor primeiro!")
    }
    else{
        for (let number of vetor){
            console.log("> " + number)
        }
    }
}