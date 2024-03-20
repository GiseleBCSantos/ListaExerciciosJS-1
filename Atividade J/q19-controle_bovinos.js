import { get_valid_number, get_text } from "../io.utils.js";

function main(){
    let mais_magro = ''
    let peso_mais_magro = 2000
    let mais_gordo = ''
    let peso_mais_gordo = 0

    console.log('>>> Registro de bovinos <<<')
    console.log('Cadastro >> ')

    while (true){
        let numero = get_valid_number('Insira o n° de identificação:  ')
        
        if (numero === 0){
            break
        }
        
        let peso = get_valid_number('Insira o peso: ')

        if (verificar_mais_gordo(peso_mais_gordo, peso)){
            mais_gordo = numero
            peso_mais_gordo = peso
        }

        if (verificar_mais_magro(peso_mais_magro, peso)){
            mais_magro = numero
            peso_mais_magro = peso
        }
        
    }

    console.log(`
    >> Controle de bovinos <<

    N° identificação mais magro: ${mais_magro}
    Peso do mais magro: ${peso_mais_magro}

    N° identificação mais gordo: ${mais_gordo}
    Peso do mais gordo: ${peso_mais_gordo}
    `)


}

function verificar_mais_gordo(valor_anterior, valor_atual){
    if (valor_atual > valor_anterior){
        return true
    }
    return false
}

function verificar_mais_magro(valor_anterior, valor_atual){
    if (valor_atual < valor_anterior){
        return true
    }
    return false
}

main()