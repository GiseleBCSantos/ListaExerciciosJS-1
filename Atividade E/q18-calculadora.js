import { get_number } from "./io.utils.js";

function main(){
    const numero1 = get_number('Insira o primeiro numero: ')
    const numero2 = get_number('Insira o segundo numero: ')

    const operacao = escolher_operacao()
    const simbolo_operacao = operacao_simbolo(operacao)

    const calcular = calculadora(operacao, numero1, numero2)



    console.log(`    
    >> Resposta: ${numero1} ${simbolo_operacao} ${numero2} = ${calcular}`)

}

function escolher_operacao(){
    const operacao =  get_number(`Insira uma operacao: 
    1-Adicao
    2-Subtracao
    3-Multiplicacao
    4-Divisao
    >> `)

    if (operacao < 1 || operacao > 4){
        escolher_operacao()
    }

    return operacao
}

function operacao_simbolo(operacao){
    if (operacao === 1){
        return '+'
    }
    if (operacao === 2){
        return '-'
    }
    if (operacao === 3){
        return 'x'
    }
    if (operacao === 4){
        return '/'
    }
}

function soma(n1, n2){
    return n1+n2
}

function subtracao(n1, n2){
    return n1-n2
}

function produto(n1, n2){
    return n1*n2
}

function divisao(n1, n2){
    return n1/n2
}

function calculadora(option, number1, number2){
    if (option === 1){
        return soma(number1, number2)
    }
    else if (option === 2){
        return subtracao(number1, number2)
    }
    else if (option === 3){
        return produto(number1, number2)
    }
    else if (option === 4){
        return divisao(number1, number2)
    }
}

main()