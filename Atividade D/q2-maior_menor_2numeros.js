import { get_number } from "./io.utils.js";

function main(){
    console.log('**** Descubra qual número é maior ****')

    const numero1 = get_number("Insira o primeiro numero: ")
    const numero2 = get_number('Insira o segundo numero: ')

    const maior = maior_numero(numero1, numero2)
    const menor = menor_numero(numero1, numero2)


    console.log(`
    Você inseriu os números ${numero1} e ${numero2}
    >> Maior: ${maior}
    >> Menor: ${menor}
    `)
}

function maior_numero(number1, number2){
    if (number1 >= number2){
        return number1
    }
    else{
        return number2
    }
}

function menor_numero(number1, number2){
    if (number1 <= number2){
        return number1
    }
    else{
        return number2
    }
}

main()