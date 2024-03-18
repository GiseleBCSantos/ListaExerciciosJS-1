import { get_valid_number } from "../io.utils.js";

function main(){
    console.log('>>> Calculo de divisão por 2 até o quociente ser menor que 1 <<<')

    const numero = get_valid_number('Insira um número: ')

    const resto_menor_1 = calcular_divisao(numero)

    console.log(`O número ${numero} dividido por 2 até seu resultado ser menor que 1 é igual a: ${resto_menor_1}`)

}


function calcular_divisao(num){
    while (num >= 1){
        num /= 2
    }
    return num
}


main()