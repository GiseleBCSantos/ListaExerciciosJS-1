import { get_integer_positive_number } from "../io.utils.js"


function main(){
    console.log('>> ELEIÇÃO PRESIDENCIAL <<')

    const qntd_eleitores = get_integer_positive_number('Quantos eleitores irao votar? ')
    let contador = 0

    let candidato_1 = 0
    let candidato_2 = 0
    let candidato_3 = 0
    let voto_nulo = 0
    let voto_branco = 0

    while (contador < qntd_eleitores){
        const votacao = get_integer_positive_number('Insira seu voto (1 - candidato 1 | 2 - candidato 2 | 3 - candidato 3 | 9 - voto nulo | 0 - em branco): ')
    
        if (votacao === 1){
            candidato_1++
        }
        if (votacao === 2){
            candidato_2++
        }
        if (votacao === 3){
            candidato_3++
        }
        if (votacao === 9){
            voto_nulo++
        }
        if (votacao === 0){
            voto_branco++
        }

        contador++
    }

    const vencedor = verificar_vencedor(candidato_1, candidato_2, candidato_3, voto_nulo, voto_branco)

    mostrar_resultado_eleicao(candidato_1, candidato_2, candidato_3, voto_nulo, voto_branco, vencedor)

}

function mostrar_resultado_eleicao(candidato_1, candidato_2, candidato_3, voto_nulo, voto_branco, vencedor){
    console.log(`
>> Votos candidato 1: ${candidato_1}
>> Votos candidato 2: ${candidato_2}
>> Votos candidato 3: ${candidato_3}
>> Votos branco: ${voto_branco}
>> Votos nulo: ${voto_nulo}


>>> Vencedor: ${vencedor}
`)
}

function verificar_vencedor(candidato_1, candidato_2, candidato_3, voto_nulo, voto_branco){
    const maior_valor =  Math.max(candidato_1, candidato_2, candidato_3, voto_nulo, voto_branco)
    if (candidato_1 === maior_valor){
        return 'candidato 1'
    }
    if (candidato_2 === maior_valor){
        return 'candidato 2'
    }
    if (candidato_3 === maior_valor){
        return 'candidato 3'
    }
    if (voto_branco === maior_valor){
        return 'votos em branco'
    }
    if (voto_nulo === maior_valor){
        return 'votos em nulo'
    }
}

main()