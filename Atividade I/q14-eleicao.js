import {get_number} from '../io.utils.js'

function main(){
    console.log('PESQUISA DE OPINIÃO')

    let votos_totais = 0
    let votos_serra = 0
    let votos_dilma = 0
    let votos_ciro = 0
    let votos_indeciso = 0
    let votos_outros = 0
    let votos_nulo = 0

    while (true){
        let voto = get_number('\nInsira para quem vai seu voto:\nSerra (45)\nDilma (13) \nCiro Gomes (23) \nIndeciso (99) \nOutros (98) \nNulo/branco (0)\n>>>>> ')

        if (voto === -1){
            break
        }
        if (voto === 45){
            votos_totais++
            votos_serra++
        }
        if (voto === 13){
            votos_totais++
            votos_dilma++
        }
        if (voto === 23){
            votos_totais++
            votos_ciro++
        }
        if (voto === 99){
            votos_totais++
            votos_indeciso++
        }
        if (voto === 98){
            votos_totais++
            votos_outros++
        }
        if (voto === 0){
            votos_totais++
            votos_nulo++
        }

    }


    let texto_percentagem_candidatos = retornar_percentagem_candidatos(votos_totais, votos_serra, votos_dilma, votos_ciro)
    let percentagem_outros = calcular_percentagem_outros(votos_totais, votos_outros)
    let percentagem_indecisos = calcular_percentagem_indecisos(votos_totais, votos_indeciso)
    let percentagem_nulos = calcular_percentagem_nulos(votos_totais, votos_nulo)
    let segundo_turno = verificar_segundo_turno(votos_totais, votos_nulo, votos_serra, votos_dilma, votos_ciro) ? 'haverá segundo turno' : 'não haverá segundo turno'
    

    console.log(`
    ${texto_percentagem_candidatos}
    >> Outros candidatos: ${percentagem_outros.toFixed(2)}
    >> Eleitores indecisos: ${percentagem_indecisos.toFixed(2)}
    >> Votos nulos/branco: ${percentagem_nulos.toFixed(2)}
    
    >> Total entrevistados: ${votos_totais}

    >> Provavelmente ${segundo_turno}
    `)

}


function retornar_percentagem_candidatos(votos_totais, votos_serra, votos_dilma, votos_ciro){
    let percentagem_serra = (votos_serra/votos_totais)*100
    let percentagem_dilma = (votos_dilma/votos_totais)*100
    let percentagem_ciro = (votos_ciro/votos_totais)*100
    return `
    Percentagens candidatos
    >> Serra: ${percentagem_serra.toFixed(2)} %
    >> Dilma: ${percentagem_dilma.toFixed(2)} %
    >> Ciro Gomes: ${percentagem_ciro.toFixed(2)} %`
}

function calcular_percentagem_outros(votos_totais, votos_outros){
    return (votos_outros/votos_totais)*100
}

function calcular_percentagem_indecisos(votos_totais, votos_indeciso){
    return (votos_indeciso/votos_totais)*100
}

function calcular_percentagem_nulos(votos_totais, votos_nulo){
    return (votos_nulo/votos_totais)*100
}

function verificar_segundo_turno(votos_totais, votos_nulo, votos_serra, votos_dilma, votos_ciro){
    let mais_votado = verificar_mais_votos(votos_serra, votos_dilma, votos_ciro)
    let votos_validos = votos_totais - votos_nulo

    if (mais_votado > votos_validos/2 ){
        return false
    }
    return true
}

function verificar_mais_votos(votos_serra, votos_dilma, votos_ciro){
    if (votos_serra > votos_ciro && votos_serra > votos_dilma){
        return votos_serra
    }
    if (votos_dilma > votos_serra && votos_dilma > votos_ciro){
        return votos_dilma
    }
    return votos_ciro
}


main()