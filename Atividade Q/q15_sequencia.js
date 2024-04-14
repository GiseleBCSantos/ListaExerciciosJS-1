import { get_number } from "../io.utils.js";

function main(){
    const numero = get_number('Insira um numero para saber seus multiplos: ')

    mostrar_sequencia(numero)
}

function mostrar_sequencia(qntd_numeros){
    let incremento = 2
    let numero = 1
    for (let i = 1; i <= qntd_numeros; i++){
        console.log(numero)
        numero += incremento
        incremento++
    }
}

main()