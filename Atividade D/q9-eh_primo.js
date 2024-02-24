import { get_valid_number } from "./io.utils.js";

function main(){
    const numero_inserido = get_valid_number('Insira um numero de 0 a 100 para saber se e um numero primo: ')

    const resposta = eh_primo(numero_inserido)
    const resposta_em_texto = texto_eh_primo(resposta)

    console.log(`
    >> O número ${numero_inserido} ${resposta_em_texto}.`)


}

function eh_primo(number){
    let count = 0
    
    for (let i = 1; i <= number; i++){
        
        if (number % i === 0){
            count += 1
        }
    }

    if (count <= 2){
        return true
    }

    return false
}

function texto_eh_primo(value){
    if (value === true){
        return 'é primo'
    }
    return 'não é primo'
}

main()