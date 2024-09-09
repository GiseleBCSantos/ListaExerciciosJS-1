import { maior_numero, menor_numero, print } from "../../io.utils.js"

function main(){
    let produto = getProduto(5, 11)
    print(produto)
}

function getProduto(number1, number2){
    let acc = 0
    let count = 0
    while (count < menor_numero(number1, number2)){
        acc += maior_numero(number1, number2)
        count++
    }
    return acc
}

main()