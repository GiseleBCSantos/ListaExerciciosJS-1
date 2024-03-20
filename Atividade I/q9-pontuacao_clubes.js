import { get_valid_number, get_text } from "../io.utils.js";

function main(){
    let pontos_totais_clube_a = 0
    let pontos_totais_clube_b = 0
    let pontos_clube_a = 0;
    let pontos_clube_b = 0;
    let texto_prova = ''

    while (true){
        const numero_prova = get_valid_number('Insira o número da prova: ')
        const numero_nadadores = get_valid_number('Insira o número de nadadores que participou desta prova: ')

        if (numero_prova === 0 && numero_nadadores === 0){
            break
        }

        texto_prova += `
        Prova: ${numero_prova} 
        Quantidade de nadadores: ${numero_nadadores}
        ----------------------------\n`


        let texto_nadadores_por_prova = ''
        let contador_informacoes_nadadores = 0

        while (contador_informacoes_nadadores < numero_nadadores){
            let nome = get_text('Insira o nome do nadador: ')
            let lugar = get_position(`Insira a colocação que o nadador ${nome} ficou: `)
            let tempo = get_valid_number(`Insira o tempo que o nadador ${nome} fez: `)
            let clube = get_clube(`Insira o clube que o nadador ${nome} está registrado: `)

            
            if (clube === 'a'){
                pontos_clube_a += obter_pontos(lugar)
            }
            if (clube === 'b'){
                pontos_clube_b += obter_pontos(lugar)
            }


            texto_nadadores_por_prova += `
            Nadador >> ${nome}
            Lugar >> ${lugar}
            Tempo >> ${tempo}
            Clube >> ${clube}
            Pontos para o clube ${clube} >> ${clube === 'a' ? pontos_clube_a : pontos_clube_b}
            `


            contador_informacoes_nadadores++
        }

        texto_prova += texto_nadadores_por_prova
        texto_prova += `
        PONTOS CLUBE a NA PROVA ${numero_prova} >> ${pontos_clube_a}
        PONTOS CLUBE b NA PROVA ${numero_prova} >> ${pontos_clube_b}
        `

        pontos_totais_clube_a += pontos_clube_a
        pontos_totais_clube_b += pontos_clube_b
        pontos_clube_a = 0
        pontos_clube_b = 0
    }
    console.log(pontos_clube_a, pontos_clube_b)

    texto_prova += `
    PONTOS TOTAIS CLUBE a >> ${pontos_totais_clube_a}
    PONTOS TOTAIS CLUBE b >> ${pontos_totais_clube_b}
    `

    console.log(texto_prova)

    let campeao = pontos_clube_a >= pontos_clube_b ? `Clube 'a' é o campeão!` : `Clube 'b' é o campeão!`

    console.log(campeao)
}

// function registrar_provas(){
//     let pontos_clube_a = 0
//     let pontos_clube_b = 0
//     let texto_prova = ''
//     while (true){
//         const numero_prova = get_valid_number('Insira o número da prova: ')
//         const numero_nadadores = get_valid_number('Insira o número de nadadores que participou desta prova: ')

//         if (numero_prova === 0 && numero_nadadores === 0){
//             break
//         }

//         texto_prova += `
//         Prova: ${numero_prova} 
//         Quantidade de nadadores: ${numero_nadadores}
//         ----------------------------\n`

//         texto_prova, pontos_clube_a, pontos_clube_b += registrar_nadadores_em_provas(numero_nadadores)
//     }
//     console.log(pontos_clube_a)

    

//     return texto_prova
// }


// function registrar_nadadores_em_provas(numero_nadadores){
//     let pontos_clube_a = 0
//     let pontos_clube_b = 0
//     let texto_nadadores_por_prova = ''
//     let contador_informacoes_nadadores = 0
//     while (contador_informacoes_nadadores < numero_nadadores){
//         let nome = get_text('Insira o nome do nadador: ')
//         let lugar = get_position(`Insira a colocação que o nadador ${nome} ficou: `)
//         let tempo = get_valid_number(`Insira o tempo que o nadador ${nome} fez: `)
//         let clube = get_clube(`Insira o clube que o nadador ${nome} está registrado: `)

        
//         if (clube === 'a'){
//             pontos_clube_a += obter_pontos(lugar)
//         }
//         if (clube === 'b'){
//             pontos_clube_b += obter_pontos(lugar)
//         }


//         texto_nadadores_por_prova += `
//         Nadador >> ${nome}
//         Lugar >> ${lugar}
//         Tempo >> ${tempo}
//         Clube >> ${clube}
//         Pontos para o clube ${clube} >> ${clube === 'a' ? pontos_clube_a : pontos_clube_b}
//         `


//         contador_informacoes_nadadores++
//     }

//     return texto_nadadores_por_prova, pontos_clube_a, pontos_clube_b
// }


// function atribuir_pontos_clubes(clube, lugar, pontos_clube_a, pontos_clube_b){
//     if (clube === 'a'){
//         pontos_clube_a += obter_pontos(lugar)
//         return pontos_clube_a
//     }
//     if (clube === 'b'){
//         pontos_clube_b += obter_pontos(lugar)
//         return pontos_clube_b
//     }
// }


function obter_pontos(lugar){
    if (lugar === 1){
        return 9
    }
    else if (lugar === 2){
        return 6
    }
    else if (lugar === 3){
        return 4
    }
    else{
        return 3
    }
}

function get_position(text){
    let posicao = get_valid_number(text)
    if (posicao <=4 && posicao >=1){
        return posicao
    }
    return get_position(text)
}

function get_clube(text){
    let clube = get_text(text)
    if (clube === 'a' || clube === 'b'){
        return clube
    }
    return get_clube(text)
}

main()