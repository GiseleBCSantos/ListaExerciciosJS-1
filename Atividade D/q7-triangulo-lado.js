import { get_valid_number } from "./io.utils.js";

function main(){
    const lado1 = get_valid_number('Insira o primeiro lado: ')
    const lado2 = get_valid_number('Insira o segundo lado: ')
    const lado3 = get_valid_number('Insira o terceiro lado: ')


    const txt_triangulo = eh_triangulo(lado1, lado2, lado3)

    console.log(`
        Lados inseridos: ${lado1}, ${lado2}, ${lado3}
        ${txt_triangulo}`)

    if (txt_triangulo === 'Formam um triângulo'){
        let tipo_triangulo = definir_triangulo(lado1, lado2, lado3)
        console.log(`
        É um triângulo do tipo ${tipo_triangulo}.`)
    }






}

function eh_triangulo(lado1, lado2, lado3){
    if ((lado1 + lado2 > lado3) || (lado1 + lado3 > lado2) || (lado2 + lado3 > lado1)){
        return 'Formam um triângulo'
    }
    else{
        return 'Não formam um triângulo'
    }
}

function definir_triangulo(lado1, lado2, lado3){
    if (lado1 === lado2  && lado2 === lado3){
        return 'equilátero'
    }
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        return 'isósceles'
    }
    else{
        return 'escaleno'
    }

}

main()