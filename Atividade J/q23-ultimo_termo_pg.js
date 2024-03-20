import {get_valid_number} from '../io.utils.js'

function main(){
    const razao = get_valid_number('Insira a razão da sua P.G: ')
    const primeiro_termo = get_valid_number('Insira o primeiro termo da P.G: ')
    const quantidade_termos = get_valid_number('Quantos números terão na P.G? ')

    const ultimo_termo = calcular_ultimo_termo_pg(razao, primeiro_termo, quantidade_termos)

    console.log(`
    Razão: ${razao}
    Primeiro termo: ${primeiro_termo}
    Quantidade de números: ${quantidade_termos}
    
    >> Ultimo termo = ${ultimo_termo}`)


}

function calcular_ultimo_termo_pg(razao, primeiro_termo, quantidade_termos){
    return primeiro_termo*(razao**(quantidade_termos-1))
}

main()