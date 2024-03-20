import { get_number_in_range, get_valid_number } from '../io.utils.js'

function main(){
    const qntd_pessoas = 100
    let mulheres = 0
    let soma_idade_mulheres = 0
    let homens = 0
    let soma_idade_homens = 0
    let homens_casados = 0
    let mulheres_casadas = 0
    let homens_solteiros = 0
    let mulheres_solteiras = 0
    let homens_divorciados = 0
    let mulheres_divorciadas = 0
    let homens_viuvos = 0
    let mulheres_viuvas = 0
    let mulheres_acima_30_divorciadas = 0
    let contador = 0

    while (contador < qntd_pessoas){
        const sexo = get_number_in_range(1, 2, 'Insira seu sexo (1-Masculino | 2-Feminino')
        const idade = get_valid_number('Insira sua idade: ')
        const estado_civil = get_number_in_range(1, 4, 'Insira seu estado civil (1-Casado | 2-Solteiro | 3-Divorciado | 4-Viúvo) --> ')

        if (sexo === 1){
            homens ++
            soma_idade_homens += idade
            if (estado_civil === 1){
                homens_casados++
            }
            if (estado_civil === 2){
                homens_solteiros++
            }
            if (estado_civil === 3){
                homens_divorciados++
            }
            if (estado_civil === 4){
                homens_viuvos++
            }
        }
        if (sexo === 2){
            mulheres++
            soma_idade_mulheres += idade
            if (estado_civil === 1){
                mulheres_casadas++
            }
            if (estado_civil === 2){
                mulheres_solteiras++
            }
            if (estado_civil === 3){
                mulheres_divorciadas++
                if (idade > 30){
                    mulheres_acima_30_divorciadas++
                }
            }
            if (estado_civil === 4){
                mulheres_viuvas++
            }
        }

        contador++

    }

    let media_idade_homens = calcular_media_idade(qntd_pessoas, soma_idade_homens)
    let media_idade_mulheres = calcular_media_idade(qntd_pessoas, soma_idade_mulheres)
    let percentual_solteiros = calcular_percentual_solteiros(homens, homens_solteiros)
    let percentual_solteiras = calcular_percentual_solteiros(mulheres, mulheres_solteiras)

    console.log(`
    >>>> Resultados da pesquisa <<<<
    
    >> Média de idade das mulheres: ${media_idade_mulheres}
    >> Média de idade das homens: ${media_idade_homens}
    >> Percentual de homens solteiros: ${percentual_solteiros.toFixed(2)} %
    >> Percentual de mulheres solteiras: ${percentual_solteiras.toFixed(2)} %
    >> Quantidade de mulheres divorciadas acima de 30 anos: ${mulheres_acima_30_divorciadas}
    `)

}

function calcular_media_idade(qntd_pessoas, qntd_sexo){
    return qntd_sexo/qntd_pessoas
}

function calcular_percentual_solteiros(qntd_sexo, qntd_solteiros){
    return (qntd_solteiros/qntd_sexo)*100
}

main()