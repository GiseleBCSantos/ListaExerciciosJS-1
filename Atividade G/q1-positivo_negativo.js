import { get_number } from "../io.utils.js";

function main(){
    const numero_inserido = get_number('Insira um número para saber se é positivo ou negativo: ')
 
    const resposta = eh_positivo(numero_inserido)

    console.log(`
    O número ${numero_inserido} é ${resposta}.`)
    
}

function eh_positivo(number){
    if (number >= 0){
        return 'positivo'
    }
    return 'negativo'
}

main()