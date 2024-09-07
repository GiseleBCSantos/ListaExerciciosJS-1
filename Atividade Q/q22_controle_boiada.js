import {get_integer_positive_number, get_text, get_valid_number} from '../io.utils.js'

function main(){
    console.log('>> CONTROLE DE BOIADA <<')

    let num_id_mais_magro = 0
    let num_id_mais_gordo
    let peso_mais_magro = 99999999
    let peso_mais_gordo = 0

    const qntd_bois = get_integer_positive_number('Quantos bois voce deseja cadastrar? ')
    let contador = 0

    while (contador < qntd_bois){
        const num_id = get_integer_positive_number('Insira o numero de identificacao do boi: ')
        const nome = get_text('Insira o nome do boi: ')
        const peso = get_valid_number('Insira o peso do boi: ')

        if (peso >= peso_mais_gordo){
            peso_mais_gordo = peso
            num_id_mais_gordo = num_id
        }
        if (peso <= peso_mais_magro){
            peso_mais_magro = peso
            num_id_mais_magro = num_id
        }

        contador++
    }

    mostrar_maisgordo_maismagro(peso_mais_gordo, num_id_mais_gordo, peso_mais_magro, num_id_mais_magro)

}


function mostrar_maisgordo_maismagro(peso_mais_gordo, num_id_mais_gordo, peso_mais_magro, num_id_mais_magro){
        console.log(`
>> RESULTADO <<

>> Boi mais gordo: n° ${num_id_mais_gordo}
>>>> Peso: ${peso_mais_gordo} kg

>> Boi mais magro: n° ${num_id_mais_magro}
>>>> Peso: ${peso_mais_magro} kg
`)
    }


main()