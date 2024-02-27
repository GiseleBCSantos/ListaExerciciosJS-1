import { get_valid_number } from "./io.utils.js";

function main(){
    console.log('>>>> Identificação de lados <<<<')
    const lado1 = get_valid_number('Insira um lado do triangulo: ')
    const lado2 = get_valid_number('Insira um lado do triangulo: ')
    const lado3 = get_valid_number('Insira um lado do triangulo: ')

    const lados_identificados = identificar_lados(lado1, lado2, lado3)

    console.log(`${lados_identificados}`)


}


function identificar_lados(lado1, lado2, lado3){
    if (lado1**2 == lado2**2 + lado3**2){
        return `
                >> Hipotenusa: lado1(${lado1})
                >> Catetos: lado2(${lado2}) e lado3(${lado3})`
    }
    else if (lado2**2 == lado1**2 + lado3**2){
        return `
                >> Hipotenusa: lado2(${lado2})
                >> Catetos: lado1(${lado1}) e lado3(${lado3})`
    }
    else if (lado3**2 == lado2**2 + lado1**2){
        return `
                >> Hipotenusa: lado3(${lado3})
                >> Catetos: lado2(${lado2}) e lado1(${lado1})`
    }
    else{
        return 'Não é um triângulo retângulo'
    }

}

main()