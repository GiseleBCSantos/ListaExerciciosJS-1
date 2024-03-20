import {get_valid_number} from '../io.utils.js'

function main(){
    const distancia = 600
    const gasolina = 50

    const situacao_viagem = ler_aparelho(distancia, gasolina)

    const traducao_situacao_viagem = traduzir_aparelho(situacao_viagem)

    console.log(traducao_situacao_viagem)


}


function traduzir_aparelho(number){
    if (number === 1){
        return 'O carro chegou ao seu destino.'
    }
    return 'A gasolina acabou antes de chegar ao destino.'
}

function ler_aparelho(distancia_max, gasolina_max){
    let distancia_percorrida = 0
    let litros_consumidos = 0
    while(distancia_percorrida < distancia_max && litros_consumidos < gasolina_max){
        const distancia_lida = get_valid_number('Qual a distância percorrida que o aparelho indicou? ')
        const litros_lidos = get_valid_number('Quantos litros consumidos o aparelho indicou?  ')

        distancia_percorrida += distancia_lida
        litros_consumidos += litros_lidos

        if (distancia_percorrida >= distancia_max){
            console.log(`O carro fez ${distancia_percorrida} km com ${litros_consumidos} litros . Então teve um consumo de ${(distancia_percorrida/litros_consumidos).toFixed(2)} km/litros`)
            return 1
        }
        else if (litros_consumidos >= gasolina_max){
            console.log(`O carro fez ${distancia_percorrida} km com ${gasolina_max} litros. Então teve um consumo de ${(distancia_percorrida/gasolina_max).toFixed(2)} km/litros`)
            return 2
        }
    }

}

main()