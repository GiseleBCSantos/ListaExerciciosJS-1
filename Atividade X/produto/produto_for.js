import { maior_numero, menor_numero, print } from "../../io.utils.js"

function main(){
    let produto = getProduto(10, 11)
    print(produto)
}

function getProduto(number1, number2){
    let acc = 0
    for (let i=0;i<menor_numero(number1, number2);i++){
        acc += maior_numero(number1, number2)
    }
    return acc
}

main()