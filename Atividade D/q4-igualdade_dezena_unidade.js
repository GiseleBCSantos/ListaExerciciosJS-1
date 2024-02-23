import { get_number } from "./io.utils.js";

function main(){

    const numero = get_number('Insira um numero de 2 digitos para a verificacao: ')

    const numero_dezena = converter_dezena(numero)
    const numero_unidade = converter_unidade(numero)

    const verificacao = verificar_dezena_unidade(numero_dezena, numero_unidade)

    console.log(`
    Você inseriu o número ${numero}
    >> Dezena = ${numero_dezena}
    >> Unidade = ${numero_unidade}
    ${verificacao}.`)

}

function converter_dezena(number){
    return Math.floor(number / 10)
}

function converter_unidade(number){
    return number % 10
}

function verificar_dezena_unidade(dezena, unidade){
    if (dezena > unidade){
        return 'O algarismo da dezena é maior do que o da unidade'
    }
    else if (dezena === unidade){
        return 'O algarismo da dezena é igual ao da unidade'
    }
    else{
        return 'O algarismo da dezena é menor do que o da unidade'
    }
}

main()