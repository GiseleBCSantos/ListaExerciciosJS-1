import {get_integer_positive_number, get_valid_number} from '../io.utils.js'

function main(){
    console.log('>> CONTROLE DE HABITANTES <<')

    const qntd_habitantes = get_integer_positive_number('Quantos habitantes voce deseja cadastrar? ')
    let contador = 0
    let salario_total = 0
    let quantidade_filhos_total = 0
    let qntd_pessoas_salario_menos_1000 = 0

    while (contador < qntd_habitantes){
        const salario = get_valid_number('Insira seu salario: ')
        const num_filhos = get_valid_number('Insira o numero de filhos: ')

        salario_total += salario
        quantidade_filhos_total += num_filhos

        if (salario < 1000){
            qntd_pessoas_salario_menos_1000 += 1
        }

        contador++
    }

    const media_salarial = salario_total/qntd_habitantes
    const media_filhos = quantidade_filhos_total/qntd_habitantes
    const percentual_pessoas_salario_menos_1000 = (qntd_pessoas_salario_menos_1000 / qntd_habitantes)*100

    mostrar_resultado_pesquisa(media_salarial, media_filhos, percentual_pessoas_salario_menos_1000)
}

function mostrar_resultado_pesquisa(media_salarial, media_filhos, percentual_pessoas_salario_menos_1000){
    console.log(`
>> PESQUISA DE HABITANTES <<

>> Média salarial: R$ ${media_salarial.toFixed(2)}
>> Média de filhos: ${media_filhos.toFixed(1)}
>> Percentual de pessoas com salário de até R$ 1000,00: ${percentual_pessoas_salario_menos_1000.toFixed(2)} %
`)
}

main()