import {get_valid_number} from '../io.utils.js'

function main(){
    const razao = get_valid_number('Insira a razão da sua P.A: ')
    const primeiro_termo = get_valid_number('Insira o primeiro termo da P.A: ')
    const ultimo_termo = get_valid_number('Insira o ultimo termo da sua P.A:  ')


    calcular_termos_pa(razao, primeiro_termo, ultimo_termo)
    
}

function calcular_termos_pa(razao, primeiro_termo, ultimo_termo){
    let posicao = 1
    let termo_atual = primeiro_termo
    while (termo_atual <= ultimo_termo){
        console.log(`O termo da posição n° ${posicao} = ${termo_atual}`)
        termo_atual += razao
        posicao++
    }
}

main()