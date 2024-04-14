import { get_number } from "../io.utils.js";

function main(){
    const numero = get_number('Insira um numero para saber seus multiplos: ')
    const limite_superior = get_number('Insira um valor para o maximo: ')
    const limite_inferior = get_number('Insira um valor para seu minimo: ')

    mostrar_multiplos(numero, limite_superior, limite_inferior)
}

function mostrar_multiplos(numero, limite_superior, limite_inferior){
    for (let i = limite_inferior; i <= limite_superior; i++){
        if (i % numero == 0){
            console.log(`${i} é um multiplo de ${numero}`)
        }
    }
}

main()