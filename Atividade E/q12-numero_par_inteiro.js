import { get_number } from "./io.utils.js";


function main(){
    const numeroInserido = get_number('Insira um numero inteiro para saber se ele e par ou impar: ')

    if (eh_inteiro(numeroInserido)){
        if (eh_par(numeroInserido)){
            console.log(`O número ${numeroInserido} é par.`)
        }
        else{
            console.log(`O número ${numeroInserido} é ímpar.`)
        }

    }
    else{
        console.log('Insira um número inteiro!')
        main()
    }


}


function eh_inteiro(number){
    return number % 1 === 0
}

function eh_par(number){
    return number % 2 === 0
}


main()