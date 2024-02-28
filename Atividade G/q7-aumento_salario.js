import { get_valid_number } from "../io.utils.js";

function main(){

    const salario = get_valid_number('Insira seu salário: ')

    const percentual_aumento = determinar_percentual(salario)
    const aumento = calcular_reajuste(salario, percentual_aumento)
    const salario_apos_reajuste = calcular_salario_apos_reajuste(salario, aumento)


    console.log(`
    **** REAJUSTE DE SALÁRIOS ****
    
    >> Salário atual: R$ ${salario.toFixed(2)}
    >> Percentual aumento: ${percentual_aumento}%
    >> Aumento: R$ ${aumento.toFixed(2)}
    >> Novo saário: R$ ${salario_apos_reajuste.toFixed(2)}`)

}

function calcular_salario_apos_reajuste(salario, aumento){
    return salario + aumento
}


function calcular_reajuste(salario, percentual){
    let percentual_aumento = percentual/100
    if (salario <= 280){
        return salario *= percentual_aumento
    }
    else if (salario <= 700){
        return salario *= percentual_aumento
    }
    else if (salario <= 1500){
        return salario *= percentual_aumento
    }
    return salario *= percentual_aumento
}


function determinar_percentual(salario){
    if (salario <= 280){
        return 20
    }
    else if (salario <= 700){
        return 15
    }
    else if (salario <= 1500){
        return 10
    }
    return 5
}

main()