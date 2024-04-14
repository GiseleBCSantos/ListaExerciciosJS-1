import {get_valid_number, get_number} from '../io.utils.js'

function main(){
    const qntd_numeros = get_valid_number('Insira a quantidade de numeros que voce vai usar: ')

    const maior_numero = mostrar_maior_numero_lista(qntd_numeros)

    console.log(`O maior número inserido foi ${maior_numero}.`)

}

function mostrar_maior_numero_lista(tamanho_lista){
    let maior_numero = 0
    let contador = 0

    while (contador < tamanho_lista){
        const numero = get_number('Insira um numero: ')

        if (numero > maior_numero){
            maior_numero = numero
        }
        contador ++
    }

    return maior_numero
}

main()