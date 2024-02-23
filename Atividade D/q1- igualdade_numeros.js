import { get_number } from "./io.utils.js";
function main(){
    console.log('****** Verificação de igualdade em numeros ******')

    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número: ')
    const numero3 = get_number('Insira o terceiro número: ')


    let igualdades = equal_numbers(numero1, numero2, numero3)


    console.log(`
    Primeiro número: ${numero1}
    Segundo número:  ${numero2}
    Terceiro número: ${numero3}
    
    **** Resultado das igualdades ****
    ${igualdades}`)


}

function equal_number(number1, number2){
    return number1 === number2
}

function equal_numbers(number1, number2, number3){
    if (equal_number(number1, number2) && equal_number(number1, number3)){
        return 'Os 3 números são iguais.'
    }
    else if (equal_number(number1, number2) || equal_number(number1, number3)){
        return 'Apenas 2 números são iguais.'
    } else{
        return 'Não há nenhum número igual.'
    }
    
}

main()