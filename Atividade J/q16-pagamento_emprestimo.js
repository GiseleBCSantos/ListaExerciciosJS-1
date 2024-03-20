import { get_valid_number } from "../io.utils.js";

function main(){
    let emprestimo = get_valid_number('Insira quanto você deseja pegar emprestado: R$ ')
    const pagamento_diario = get_valid_number('Insira o quanto você vai pagar diariamente: R$ ')

    const dias_fim_emprestimo = calcular_dias_para_fim_emprestimo(emprestimo, pagamento_diario)

    console.log(`
    Emprestimo realizado: R$ ${emprestimo.toFixed(2)}
    Pagamento diário: R$ ${pagamento_diario.toFixed(2)}
    Taxa de juros diária: 0.85%
    
    >> Serão necessários ${dias_fim_emprestimo} dias para pagar o emprestimo.`)
}

function calcular_dias_para_fim_emprestimo(emprestimo, pagamento_diario){
    const juros = 0.85
    let valor_pago = 0
    let dias = 0
    
    while (emprestimo > valor_pago){
        valor_pago += pagamento_diario
        emprestimo *= calcular_juros()
        dias++
    }

    return dias
}

function calcular_juros(){
    const juros = 0.85
    return juros/100 + 1
}


main()