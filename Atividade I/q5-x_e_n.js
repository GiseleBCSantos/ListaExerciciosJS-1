import { get_valid_number } from "../io.utils.js";

function main(){
    const numero_x = get_valid_number('Insira o numero X: ')
    const numero_n = get_valid_number('Insira o número N: ')

    mostrar_divisoes(numero_x, numero_n)


}


function mostrar_divisoes(num_x, num_n){
    let resultado;
    while (num_n >= 2){
        resultado = num_x/num_n
        console.log(`X = ${num_x.toFixed(2)}, N = ${num_n}, Resultado = ${resultado.toFixed(2)}`)
        num_x = resultado
        num_n--
    }
}

main()