import { get_number } from "./io.utils.js";

function main(){
    const ponto1_x = get_number('Insira valor de x para o ponto 1: ')
    const ponto1_y = get_number('Insira valor de y para o ponto 1: ')

    const ponto2_x = get_number('Insira valor de x para o ponto 2: ')
    const ponto2_y = get_number('Insira valor de y para o ponto 2: ')

    const area = calcular_area_retangulo(ponto1_x, ponto1_y, ponto2_x, ponto2_y)

    console.log(`
    >> Calculo de altura <<
    > Coordenada 1: (${ponto1_x}, ${ponto1_y})
    > Coordenada 2: (${ponto2_x}, ${ponto2_y})
    
    >> Área resultate do retângulo: ${area}`)

}


function calcular_area_retangulo(x1, y1, x2, y2){
    let altura = calcular_altura(y1,  y2)
    let largura = calcular_largura(x1, x2)

    return altura * largura
}



function calcular_altura(y1, y2){
    if (y1 > y2){
        return y1 - y2
    }
    else{
        return y2 - y1
    }
}

function calcular_largura(x1, x2){
    if (x1 > x2){
        return x1 - x2
    }
    else{
        return x2 - x1
    }
}

main()