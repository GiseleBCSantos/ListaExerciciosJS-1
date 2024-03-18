import { get_valid_number } from "../io.utils.js";

function main(){
    console.log('>>> Buscador de números <<<')

    const numero_inserido = get_valid_number('Insira o primeiro número: ')

    achar_numero_igual(numero_inserido)

}

function achar_numero_igual(number){
    while(true){
        let numero_para_igualar = get_valid_number('Insira um número para igualar ao primeiro: ')
        if (numero_para_igualar !== number){
            console.log('Errou! Tente novamente.')
        }
        else{
            console.log('VOCÊ ACERTOU!!!')
            break
        }
    }


}

main()