import { get_valid_number } from "../io.utils.js";

function main(){
    const qntd_numeros = get_valid_number('Insira quantos termos da sequencia de fibonacci voce vai querer: ')

    calcular_fibonacci(qntd_numeros)
}

function calcular_fibonacci(limite){
    let ultimo_num = 0
    let penultimo_num = 0
    let num_atual = ultimo_num + penultimo_num
    console.log(num_atual)
    num_atual ++
    for (let i = 0; i < limite; i++){
        console.log(num_atual)
        penultimo_num = ultimo_num
        ultimo_num = num_atual
        num_atual = ultimo_num + penultimo_num
    }
}

main()