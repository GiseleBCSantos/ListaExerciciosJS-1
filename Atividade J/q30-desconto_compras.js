import { get_text, get_valid_number } from "../io.utils.js";

function main(){
    let texto_produto = ''
    let valor_total = 0

    while (true){
        let gasto = 0
        const nome = get_text('Insira o nome do produto: ')
        if (nome.toLowerCase() === 'fim'){
            break
        }
        const preco_produto = get_valid_number('Insira o preço do produto: R$ ')
        const quantidade = get_valid_number('Insira a quantidade do produto: ')

        let preco_total_produto = calcular_preco_com_desconto(preco_produto, quantidade)

        valor_total += preco_total_produto

        texto_produto += `
>> Produto --------> ${nome}
>> Valor Produto --> ${preco_total_produto.toFixed(2)}
    `
    }

    console.log(texto_produto)
    console.log(`>>>> O valor total a ser pago é de R$ ${valor_total.toFixed(2)}`)
}


function calcular_preco_com_desconto(preco_unitario, quantidade){
    if (quantidade <= 10){
        return preco_unitario*quantidade
    }
    else if(quantidade <=20){
        return (preco_unitario*quantidade)*0.9
    }
    else if(quantidade <=50){
        return (preco_unitario*quantidade)*0.8
    }
    else{
        return (preco_unitario*quantidade)*0.75
    }
}

main()