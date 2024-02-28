import { get_valid_number } from "../io.utils.js";

function main(){
    const produto1 = get_valid_number('Insira o valor do produto 1: ')
    const produto2 = get_valid_number('Insira o valor do produto 2: ')
    const produto3 = get_valid_number('Insira o valor do produto 3: ')

    const produto_mais_barato = determinar_mais_barato(produto1, produto2, produto3)

    console.log(`
    *** LISTA DE PRODUTOS ***
    
    >> Produto 1: R$ ${produto1}
    >> Produto 2: R$ ${produto2}
    >> Produto 3: R$ ${produto3}

    >> Produto que deve ser comprado: ${produto_mais_barato}.
    `)

}


function determinar_mais_barato(valor1, valor2, valor3){
    if (valor1 < valor2 && valor1 < valor3){
        return `produto 1, com o preço de R$ ${valor1}`
    }
    else if (valor2 < valor1 && valor2 < valor3){
        return `produto 2, com o preço de R$ ${valor2}`
    }
    return `produto 3, com o preço de R$ ${valor3}`
}

main()