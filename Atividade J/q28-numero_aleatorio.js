import { get_valid_number } from "../io.utils.js";

function main(){
    const max = 10
    const min = 1
    const random_number = get_random_number(min, max)
    let numero_inserido = 0
    let tentativas = 0

    while (random_number !== numero_inserido){
        numero_inserido = get_valid_number(`Insira um número entre ${min} e ${max}: `)

        if (random_number > numero_inserido){
            console.log('Maior!')
        }
        if (random_number < numero_inserido){
            console.log('Menor!')
        }
        tentativas++
    }

    console.log(`Você ganhou!!! Você acertou em ${tentativas} tentativas.`)

}

function get_random_number(min, max){
    return Math.floor((Math.random() * (max - min) + min) + 1);
}

main()