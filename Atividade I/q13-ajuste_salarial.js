import { get_valid_number } from "../io.utils.js";

function main(){
    let salarios_atuais = 0 
    let salarios_reajustados = 0

    while (true){
        const salario_atual = get_valid_number('Insira o valor do salário de um funcionário (0 para parar): ')
        if (salario_atual === 0){
            break
        }
        salarios_atuais += salario_atual

        const salario_reajustado = aplicar_aumento(salario_atual)
        console.log(`Seu novo salário será R$ ${salario_reajustado.toFixed(2)}`)
        
        salarios_reajustados += salario_reajustado

    }
    const diferenca = salarios_reajustados - salarios_atuais

    console.log(`
    BALANÇO TOTAL
    >> Soma salários atuais: ${salarios_atuais}
    >> Soma salários reajustados: ${salarios_reajustados.toFixed(2)}
    
    >>>> Diferença: R$ ${diferenca.toFixed(2)}`)

}

function aplicar_aumento(salario_atual){
    if (salario_atual < 3000){
        return salario_atual*1.25
    }
    else if (salario_atual < 6000){
        return salario_atual*1.2
    }
    else if (salario_atual < 10000){
        return salario_atual*1.15
    }
    return salario_atual*1.1
}

main()