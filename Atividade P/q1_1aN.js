import {get_valid_number} from '../io.utils.js'

function main(){
    const numero_limite = get_valid_number('Insira um numero para ser o limite: ')

    mostrar_1aN(numero_limite)
}

function mostrar_1aN(limite){
    for (let i = 1; i <= numero_limite; i++){
        console.log(`Número = ${i}`)
    }
}

main()