import { get_number } from "./io.utils.js";

function main(){
    const opcao = get_number('Selecione a opcao: ')
    const numero1 = get_number('Insira o primeiro numero: ')
    const numero2 = get_number('Insira o segundo numero: ')
    const numero3 = get_number('Insira o terceiro numero: ')

    let numero_exibido = definir_numero_exibido(opcao, numero1, numero2, numero3)

    console.log(`
    Número 1: ${numero1}
    Número 2: ${numero2}
    Número 3: ${numero3}
    
    Opção: ${opcao}
    
    >> Resposta: ${numero_exibido}
    `)


}


function definir_numero_exibido(option, number1, number2, number3){
    if (option === 1){
        return number1
    }
    else if (option === 2){
        return number2
    }
    else if (option === 3){
        return number3
    }
    else{
        return 'Opção inválida'
    }
}

main()