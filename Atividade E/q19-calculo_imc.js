import { get_valid_number } from "./io.utils.js";

function main(){
    const altura = get_valid_number('Insira sua altura em metros: ')
    const peso = get_valid_number('Insira seu peso: ') 

    const imc = calcular_imc(altura, peso)
    let condicao = verificar_imc(imc)

    console.log(`
    >> Verificador de IMC <<
    
    > Peso: ${peso} kg
    > Altura: ${altura} m

    > IMC: ${imc.toFixed(2)}

    >> Condição: ${condicao}
    `)



}


function calcular_imc(altura, peso){
    return peso / altura**2
}


function verificar_imc(imc){
    if (imc < 25){
        return 'peso normal'
    }
    else if (imc < 30){
        return 'obesidade'
    }
    else{
        return 'obesidade mórbida'
    }
}

main()