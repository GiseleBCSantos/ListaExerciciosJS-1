import { get_valid_number } from "./io.utils.js";

function main(){
    const angulo = get_valid_number('Insira um angulo entre 0 e 360°: ')

    const quadrante = definir_quadrante(angulo)

    console.log(`
    >> Definição de quadrantes <<
    
    >> Angulo: ${angulo}°
    >> Quadrante: ${quadrante}`)




}


function definir_quadrante(angle){
    if (angle <= 90){
        return 'primeiro quadrante'
    }
    else if (angle <= 180){
        return 'segundo quadrante'
    }
    else if (angle <= 270){
        return 'terceiro quadrante'
    }
    else if (angle <= 360){
        return 'quarto quadrante'
    }
    else{
        return 'valor de angulo inválido!'
    }
}

main()