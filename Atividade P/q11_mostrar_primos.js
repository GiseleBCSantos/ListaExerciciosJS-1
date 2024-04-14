import { get_number } from "../io.utils.js";

function main(){
    const limite_inferior = get_number('Insira um valor para seu minimo: ')
    const limite_superior = get_number('Insira um valor para o maximo: ')

    mostrar_primos_em_limite(limite_superior, limite_inferior)
}

function mostrar_primos_em_limite(limite_superior, limite_inferior){
    let count = 0
    for (let i = limite_inferior; i <= limite_superior; i++){
        for (let j = 1; j < i; j++){
            if (i % j === 0){
                count ++
            }
        }
        if (count === 1){
            console.log(i)
        }

        count = 0

    }
}

main()