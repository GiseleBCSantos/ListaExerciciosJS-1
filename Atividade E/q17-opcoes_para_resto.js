import { get_integer_number, eh_par } from "./io.utils.js";

function main(){
    const numero1 = get_integer_number('Insira um valor para a primeira variável: ')
    const numero2 = get_integer_number('Insira um valor para a segunda variável: ')

    let verificacoes_questao_texto = verificacoes_necessarias(numero1, numero2)

    console.log(verificacoes_questao_texto)
}


function produto_ambos_soma_primeiro(n1, n2){
    return n1*n2 + n1
}

function divisao_soma_segundo(n1, n2){
    return (n1+n2) / 2
}

function calcular_quadrado(number){
    return number**2
}

function verificacoes_necessarias(number1, number2){
    if (number1 % number2 === 1){
        return `
        Soma: ${number1 + number2}.
        Resto: ${number1 % number2}.`
    }
    else if (number1 % number2 === 2){
        return `
        O número 1 ${eh_par(number2)}.
        O número 2 ${eh_par(number2)}.`
    }
    else if (number1 % number2 === 3){
        return `O produto de ${number1} e de ${number2}, somado com o ${number1} é de ${produto_ambos_soma_primeiro(number1, number2)}.`
    }
    else if (number1 % number2 === 4 && number2 !== 0){
        return `A divisão da soma de ${number1} e de ${number2} pelo número ${number2} é de ${divisao_soma_segundo(number1, number2).toFixed(2)}.`
    }
    else{
        return `
        Quadrado número 1: ${calcular_quadrado(number1)}.
        Quadrado número 2: ${calcular_quadrado(number2)}.`
    }
}



main()