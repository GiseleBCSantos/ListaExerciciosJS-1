import { get_number } from "./io.utils.js";

function main(){
    const horas_aula_prof1 = get_number('Insira a quantidade de horas de aula dadas pelo professor 1: ')
    const horas_aula_prof2 = get_number('Insira a quantidade de horas de aula dadas pelo professor 2: ')

    const valor_hora_prof1 = get_number('Insira quanto o professor 1 recebe por cada hora de aula dada: ')
    const valor_hora_prof2 = get_number('Insira quanto o professor 2 recebe por cada hora de aula dada: ')

    const salario_prof1 = calcular_valor_hora_aula(horas_aula_prof1, valor_hora_prof1)
    const salario_prof2 = calcular_valor_hora_aula(horas_aula_prof2, valor_hora_prof2)

    let professor_maior_salario = descobrir_maior_salario(salario_prof1, salario_prof2)

    console.log(`
    Professor 1:
    > Horas dadas: ${horas_aula_prof1}
    > Valor por hora: ${valor_hora_prof1}
    >> Salario: ${salario_prof1}
    
    Professor 2:
    > Horas dadas: ${horas_aula_prof2}
    > Valor por hora: ${valor_hora_prof2}
    >> Salario: ${salario_prof2}

    >>> O professor que tem o maior salário é o ${professor_maior_salario}.
    `)




}


function calcular_valor_hora_aula(horas, valor){
    return horas * valor
}


function descobrir_maior_salario(prof1,salario1, prof2,salario2){
    if (salario1 > salario2){
        return 'professor 1'
    }
    return 'professor 2'
}

main()