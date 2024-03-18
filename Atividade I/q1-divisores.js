import {get_valid_number} from '../io.utils.js'

function main(){
    while (true){
        const numero_inserido = get_valid_number('Insira um número para saber sua lista de divisores. Insira 0 para parar   >>> ')

        if (numero_inserido === 0){
            console.log('Fim do Programa.')
            break
        }
        else{
            mostrar_divisores(numero_inserido)
        }
    }
}

function verificar_divisor(numero, provavel_divisor){
    if (numero % provavel_divisor === 0){
        return numero
    }
}


function mostrar_divisores(numero){
    let divisor = 1
    console.log(`A seguir os divisores de ${numero}`)
        while (divisor <= numero){
            if (verificar_divisor(numero, divisor)){
                console.log(`${divisor}`)
            }
            divisor++
        }
}

main()