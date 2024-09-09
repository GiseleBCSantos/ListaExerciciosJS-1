import { print } from "../../io.utils.js"

function main(){
    let potencia = getPotencia(2, 6)
    print(potencia)
}

function getPotencia(base, expoente){
    let acc = 1
    let count = 1
    while (count <= expoente){
        acc *= base
        count++
    }
    return acc
}

main()