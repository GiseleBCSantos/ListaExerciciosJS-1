import {get_number} from './io.utils.js';

function main(){
    console.log(">>>>Resolução de equação de 2° grau <<<<")

    const coef_a = get_number('Insira o valor do coeficiente a: ')
    const coef_b = get_number('Insira o valor do coeficiente b: ')
    const coef_c = get_number('Insira o valor do coeficiente c: ')

    const delta = calcular_delta(coef_a, coef_b, coef_c)
    let raizes = calcular_raizes(coef_a, coef_b, delta)

    console.log(`
    O resultado da equação com os coeficientes 
    > a = ${coef_a} 
    > b = ${coef_b}
    > c = ${coef_c}
    
    > Delta = ${delta}
    É igual a:
    >> ${raizes}`)
}


function calcular_delta(a, b, c){
    return b**2 -1*(4*a*c)
}


function calcular_raizes(a, b, delta){
    let raiz1_numerador = (-1*b + delta**0.5)
    let raiz2_numerador = (-1*b - delta**0.5)

    let raiz_denominador = 2*a

    let raiz1 = raiz1_numerador / raiz_denominador
    let raiz2 = raiz2_numerador / raiz_denominador
    
    return `raiz 1 é igual a ${raiz1} e a raiz 2 é igual a ${raiz2}`
}


main()