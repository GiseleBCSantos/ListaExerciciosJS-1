import { print } from "../../io.utils.js"

function main(){
    let potencia = getPotencia(2, 4)
    print(potencia)
}

function getPotencia(base, expoente){
    let acc = 1
    for (let i=0;i<expoente;i++){
        acc *= base
    }
    return acc
}

main()