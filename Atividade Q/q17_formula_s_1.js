import { get_integer_number } from "../io.utils.js";

function main(){
    const valor_n = get_integer_number('Insira um valor para N: ')

    const valor_s = calcular_formula_s(valor_n)

    console.log(`Se substituirmos N por ${valor_n} na formula de S, o resultado é igual à ${valor_s.toFixed(2)}.`)
}

function calcular_formula_s(n){
    let resultado = 0
    for (let i = 1; i <= n; i++){
        resultado += 1/i
    }
    return resultado
}

main()