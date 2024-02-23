import { get_valid_number } from "./io.utils.js";

function main(){

    const angulo1 = get_valid_number('Insira o primeiro angulo: ')
    const angulo2 = get_valid_number('Insira o segundo angulo: ')
    const angulo3 = get_valid_number('Insira o terceiro angulo: ')


    const triangulo = eh_triangulo(angulo1, angulo2, angulo3)

    let txt_triangulo = ''

    const classificacao_triangulo = definir_triangulo(angulo1, angulo2, angulo3)

    if (triangulo){
        txt_triangulo = 'Os angulos inseridos formam um triangulo.'

        
        console.log(`
Você inseriu os ângulos ${angulo1}, ${angulo2} e ${angulo3}:
>> ${txt_triangulo}
>> O triângulo inserido é um triângulo ${classificacao_triangulo}.`)
    }
    else{
        txt_triangulo = 'Os angulos inseridos não formam um triangulo'

        console.log(`
Você inseriu os ângulos ${angulo1}, ${angulo2} e ${angulo3}:
>> ${txt_triangulo}.`)
    }



}


function eh_triangulo(ang1, ang2, ang3){
    if (ang1 + ang2 + ang3 === 180){
        return true
    }
    else{
        return false
    }
}


function definir_triangulo(ang1, ang2, ang3){
    if (ang1 < 90 && ang2 < 90 && ang3 < 90){
        return 'acutângulo'
    }
    else if (ang1 === 90 || ang2 === 90 || ang3 === 90){
        return 'retângulo'
    }
    else{
        return 'obtusângulo'
    }
}


main()