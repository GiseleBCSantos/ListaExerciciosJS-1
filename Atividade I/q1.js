import { get_valid_number} from '../io.utils.js'

function main(){

    while (True){
        numero = get_valid_number('Insira um número para ver seus divisores: ')
        if (numero !== 0){
            divisores = verificar_divisores(numero)
        }
        else{
            break
        }
    }
}

function verificar_divisores(number){
    
}

main()