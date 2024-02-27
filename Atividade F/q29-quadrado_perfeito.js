import { get_valid_number } from "./io.utils.js";

function main(){
    console.log("**** VERIFICADOR DE QUADRADO PERFEITO ****")

    const numero_inserido = get_valid_number('Insira um numero para o teste: ')

    const numero_verificado = verificar_quadrado_perfeito(numero_inserido)

    console.log(`${numero_verificado}`)



}


function verificar_quadrado_perfeito(number){
    if (number / 1000 > 1){
        const milhar_centena = Math.floor(number / 100)
        const dezena_unidade = number % 100
        const soma_milcen_dezuni = milhar_centena + dezena_unidade
    
        if (number**0.5 === soma_milcen_dezuni){
            return 'É quadrado perfeito'
        }
        else{
            return 'Não é quadrado perfeito'
        }
    }
    else{
        return 'Número inválido!'
    }

}

main()