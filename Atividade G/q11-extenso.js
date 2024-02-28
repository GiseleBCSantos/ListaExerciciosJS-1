import {get_integer_number} from '../io.utils.js'

function main(){
    const numero_inserido = get_integer_number('Insira um numero inteiro menor do que 1000: ')

    const extenso = transformar_extenso(numero_inserido)

    console.log(`${numero_inserido} = ${extenso}.`)

}


function transformar_extenso(number){
    let centena = Math.floor(number / 100)
    let resto = number % 100
    let dezena = Math.floor(resto / 10)
    let unidade = resto % 10
    let extenso = ''
    if (number >= 100){
        if (centena > 1 || centena === 0){
            extenso += `${centena} centenas`
        }
        else if (centena === 1){
            extenso += `${centena} centena`
        }
        if (dezena > 1 || dezena === 0){
            extenso += `, ${dezena} dezenas`
        }
        else if (dezena === 1){
            extenso += `, ${dezena} dezena`
        }
        if (unidade > 1 || unidade === 0){
            extenso += ` e ${unidade} unidades`
        }
        else if (unidade === 1){
            extenso += ` e ${unidade} unidade`
        }
    }
    else if (number > 10){
        if (dezena > 1 || dezena === 0){
            extenso += `${dezena} dezenas`
        }
        else if (dezena === 1){
            extenso += `${dezena} dezena`
        }
        if (unidade > 1 || unidade === 0){
            extenso += ` e ${unidade} unidades`
        }
        else if (unidade === 1){
            extenso += ` e ${unidade} unidade`
        }
    }
    else if (number > 0){
        if (unidade > 1 || unidade === 0){
            extenso += `${unidade} unidades`
        }
        else if (unidade === 1){
            extenso += `${unidade} unidade`
        }
    }

    return extenso

}


function texto_singular_plural(texto, modo){
    if (modo === 1){
        return texto 
    }
    else{
        return texto + 's'
    }
}


main()