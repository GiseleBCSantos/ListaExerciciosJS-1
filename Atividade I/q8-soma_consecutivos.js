import {get_valid_number} from '../io.utils.js'

function main(){
    const numero_inicial = get_valid_number('Insira o primeiro número: ')
    let numero1;
    let numero2;

    while (true){
        numero2 = numero1

        numero1 = get_valid_number('Insira um valor: ')

        if (numero1 + numero2 === numero_inicial){
            console.log(`A soma de ${numero2} e de ${numero1} é igual à ${numero_inicial}.`)
            break
        }
    }
}

main()