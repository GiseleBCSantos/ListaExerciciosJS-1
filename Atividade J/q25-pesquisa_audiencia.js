import { get_number, get_valid_number } from '../io.utils.js'

function main() {


    let audiencia_total = 0
    let audiencia_2 = 0
    let audiencia_4 = 0
    let audiencia_5 = 0
    let audiencia_7 = 0
    let audiencia_10 = 0

    while (true) {
        const canal = get_canal_valido('Insira o canal que a casa está assistindo: ')
        if (canal === 0) {
            break
        }
        const pessoas_assistindo = get_valid_number('Quantas pessoas estão assistindo ao canal indicado? ')

        if (canal === 2) {
            audiencia_2 += pessoas_assistindo
        }
        if (canal === 4) {
            audiencia_4 += pessoas_assistindo
        }
        if (canal === 5) {
            audiencia_5 += pessoas_assistindo
        }
        if (canal === 7) {
            audiencia_7 += pessoas_assistindo
        }
        if (canal === 10) {
            audiencia_10 += pessoas_assistindo
        }






    }
    audiencia_total = audiencia_2 + audiencia_4 + audiencia_5 + audiencia_7 + audiencia_10

    console.log(`
    Audiencia emissora 2 --> ${audiencia_2} espectadores / ${((audiencia_2 / audiencia_total)*100).toFixed(2)}% de audiência
    Audiencia emissora 4 --> ${audiencia_4} espectadores / ${((audiencia_4 / audiencia_total)*100).toFixed(2)}% de audiência
    Audiencia emissora 5 --> ${audiencia_5} espectadores / ${((audiencia_5 / audiencia_total)*100).toFixed(2)}% de audiência
    Audiencia emissora 7 --> ${audiencia_7} espectadores / ${((audiencia_7 / audiencia_total)*100).toFixed(2)}% de audiência
    Audiencia emissora 10 --> ${audiencia_10} espectadores / ${((audiencia_10 / audiencia_total)*100).toFixed(2)}% de audiência

    >> Total de espectadores --> ${audiencia_total}
    `)
}


function get_canal_valido(text) {
    const canal = get_number(text)
    if (canal == 0 || canal === 2 || canal === 4 || canal === 5 || canal === 7 || canal === 10) {
        return canal
    }
    console.log('Valor inválido!')
    return get_canal_valido(text)
}

main()