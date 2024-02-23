import { get_number } from "./io.utils.js";

function main(){
    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número: ')
    const numero3 = get_number('Insira o terceiro número: ')

    const maior = maior_numero(numero1, numero2, numero3)
    const medio = numero_medio(numero1, numero2, numero3)
    const menor = menor_numero(numero1, numero2, numero3)

    console.log(`
    Números inseridos: ${numero1}, ${numero2}, ${numero3}
    >> Maior = ${maior}
    >> Médio = ${medio}
    >> Menor = ${menor}`)

}




function maior_numero(number1, number2, number3){
    if (number1 >= number2 && number1 >= number3){
        return number1
    }
    else if (number2 >= number1 && number2 >= number3){
        return number2
    }
    else{
        return number3
    }
}


function menor_numero(number1, number2, number3){
    if (number1 <= number2 && number1 <= number3){
        return number1
    }
    else if (number2 <= number1 && number2 <= number3){
        return number2
    }
    else{
        return number3
    }
}


function numero_medio(number1, number2, number3){
    if ((number1 === maior_numero(number1, number2, number3)  || number1 === menor_numero(number1, number2, number3)) && (number2 === maior_numero(number1, number2, number3)  || number2 === menor_numero(number1, number2, number3))){
        return number3
    }

    else if ((number2 === maior_numero(number1, number2, number3)  || number2 === menor_numero(number1, number2, number3)) && (number3 === maior_numero(number1, number2, number3)  || number3 === menor_numero(number1, number2, number3))){
        return number1
    }
    else{
        return number2
    }

}

main()