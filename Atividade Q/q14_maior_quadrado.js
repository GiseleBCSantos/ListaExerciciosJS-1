import { get_valid_number } from "../io.utils.js";

function main(){
    const numero = get_valid_number('Insira um numero para ser descoberto o maior quadrado menor ou igual a ele: ')

    const maior_quadrado = calcular_maior_quadrado(numero)

    console.log(`O maior quadrado menor que ${numero} é ${maior_quadrado}.`)
}

function calcular_maior_quadrado(number){
    let maior_quadrado = 0
    for (let i = 1; i <= number/2; i++){
        if (i**2 <= number){
            maior_quadrado = i**2
        }
    }
    return maior_quadrado
}

main()