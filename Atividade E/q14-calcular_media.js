import { get_number, get_integer_number } from "./io.utils.js";


function main(){
    const numero1 = get_integer_number('Insira o numero 1: ')
    const numero2 = get_integer_number('Insira o numero 2: ')
    const numero3 = get_integer_number('Insira o numero 3: ')
    const numero4 = get_integer_number('Insira o numero 4: ')
    const numero5 = get_integer_number('Insira o numero 5: ')

    const media = calcular_media(numero1, numero2, numero3, numero4, numero5)

    console.log(`
    A média dos números inseridos é de ${media.toFixed(2)}.`)


}


function calcular_media(n1, n2, n3, n4, n5){
    let soma = n1+n2+n3+n4+n5
    return soma / 5
}

main()