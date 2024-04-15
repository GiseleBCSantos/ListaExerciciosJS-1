import { get_integer_positive_number, get_text, get_valid_number } from "../io.utils.js";

function main(){
    console.log('>> CONTROLE DE FUNCIONARIOS <<')

    const qntd_funcionarios = get_integer_positive_number('Quantos funcionarios voce deseja cadastrar? ')
    let contador = 0

    while (contador < qntd_funcionarios){
        const cod = get_integer_positive_number('Insira o codigo do funcionario: ')
        const horas_trabalhadas = get_text('Insira a quantidade de horas trabalhadas: ')
        const num_dependentes = get_valid_number('Insira o numero de dependentes: ')

        const salario_bruto = calcular_salario(horas_trabalhadas, num_dependentes)

        const inss = calcular_inss(salario_bruto)
        const ir = calcular_ir(salario_bruto)

        const salario_liquido = salario_bruto - inss - ir

        mostrar_dados_funcionarios(cod, salario_bruto, inss, ir, salario_liquido)


        contador++
    }
}

function calcular_inss(salario){
    return salario*0.085
}

function calcular_ir(salario){
    return salario*0.05
}

function calcular_salario(horas_trabalhadas, num_dependentes){
    return horas_trabalhadas*12 + 40*num_dependentes
}

function mostrar_dados_funcionarios(cod, salario_bruto, inss, ir, salario_liquido){
    console.log(`
>>>> Funcionário ${cod}

>> Salário Bruto:    R$ ${salario_bruto.toFixed(2)}
>> Desconto INSS:    R$ ${inss.toFixed(2)}
>> Desconto IR:      R$ ${ir.toFixed(2)}

>> Salário Líquido:  R$ ${salario_liquido.toFixed(2)}
`)

}

main()