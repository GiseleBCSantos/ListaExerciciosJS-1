import { get_valid_number } from "../io.utils.js";

function main(){
    const valor_hora = get_valid_number('Insira quanto voce ganha por hora: ')
    const horas_trabalhadas = get_valid_number('Insira quantas horas voce trabalha por mes: ')

    const salario_bruto = calcular_salario(valor_hora, horas_trabalhadas)

    const percentagem_IR = calcular_percentagem_IR(salario_bruto)
    const desconto_IR = calcular_IR(salario_bruto, percentagem_IR)

    const desconto_sindicato = calcular_sindicato(salario_bruto)

    const desconto_INSS = calcular_desconto_inss(salario_bruto)

    const valor_FGTS = calcular_fgts(salario_bruto)

    const total_descontos = calcular_total_descontos(desconto_IR, desconto_sindicato, desconto_INSS)

    const salario_liquido = calcular_salario_liquido(salario_bruto, total_descontos)

    console.log(`
    Salário Bruto: (${valor_hora} * ${horas_trabalhadas})    : R$ ${salario_bruto.toFixed(2)}
    (-) IR (${percentagem_IR}%):                  R$ ${desconto_IR}
    (-) INSS (10%):               R$ ${desconto_INSS}
    (-) Sindicato (3%):           R$ ${desconto_sindicato}
    FGTS (11%):                   R$ ${valor_FGTS}
    Total de descontos:           R$ ${total_descontos}
    Salário líquido:              R$ ${salario_liquido}`)


}


function calcular_salario_liquido(salario_bruto, descontos){
    return salario_bruto - descontos
}


function calcular_total_descontos(descontoIR, descontoSindic, descontoINSS){
    return descontoIR + descontoSindic + descontoINSS
}


function calcular_salario(valor_hora, horas){
    return valor_hora *  horas
}

function calcular_IR(salario_bruto, percentagem){
    return salario_bruto * (percentagem /100)
}

function calcular_sindicato(salario_bruto){
    return salario_bruto*0.03
}


function calcular_percentagem_IR(salario_bruto){
    if (salario_bruto <= 900){
        return 0
    }
    else if (salario_bruto <= 1500){
        return 5
    }
    else if (salario_bruto <= 2500){
        return 10
    }
    return 20
}


function calcular_desconto_inss(salario_bruto){
    return salario_bruto*0.1
}


function calcular_fgts(salario_bruto){
    return salario_bruto* 0.11
}

main()