import { get_number } from "../io.utils.js";

function main(){
    const limite_inferior = get_number('Insira um valor para seu minimo: ')
    const limite_superior = get_number('Insira um valor para o maximo: ')

    mostrar_pares_em_limite(limite_superior, limite_inferior)
}

function mostrar_pares_em_limite(limite_superior, limite_inferior){
    for (let i = limite_inferior; i <= limite_superior; i++){
        if (i % 2 !== 0){
            console.log(`${i} é um número par entre ${limite_inferior} e ${limite_superior}`)
        }
    }
}

main()