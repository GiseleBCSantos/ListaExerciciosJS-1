import { get_text, get_valid_number } from "../io.utils.js";

function main(){
    let numero_passageiros = 0
    let peso_passageiros = 0
    let peso_bagagens = 0
    let peso_containers = 0
    let quantidade_combustivel = 10000
    let peso_combustivel = quantidade_combustivel*1.5
    let numero_containers = get_valid_number('Insira a quantidade de containers que vão no avião: ')
    while (numero_containers > 0){
        peso_containers += get_valid_number('Quanto pesa este container? ')
        numero_containers--
    }

    while (true){
        let numero_passagem = get_valid_number('Insira o número da passagem: ')

        if (numero_passagem === 0){
            break
        }

        let quantidade_bagagens = get_valid_number('Insira quantas bagagens vai levar: ')


        numero_passageiros += 1
        peso_passageiros += 70
        peso_bagagens += 10*quantidade_bagagens
    }

    let peso_total = peso_containers + peso_passageiros + peso_bagagens + peso_combustivel

    let decolagem_autorizacao = peso_total <= 500000 ? 'VIAGEM AUTORIZADA' : 'VIAGEM NÂO AUTORIZADA'

    let combustivel_a_adicionar = calcular_combustivel_adicional(peso_total)

    console.log(`
    Quantidade de passageiros: ${numero_passageiros}
    Peso total bagagens: ${peso_bagagens}
    Peso passageiros: ${peso_passageiros}
    Peso containers: ${peso_containers}
    Quantidade combustivel: ${quantidade_combustivel} l
    Peso total no avião: ${peso_total}

    >> ${decolagem_autorizacao}`)

    if (decolagem_autorizacao === 'VIAGEM AUTORIZADA'){
        console.log(`
        >> Ainda é possível adicionar ${combustivel_a_adicionar} litros de combustível no avião ou adicionar ${500000 - peso_total} kg de carga.`)
    }

}

function calcular_combustivel_adicional(peso_total){
    if (peso_total < 500000){
        return (500000 - peso_total)/1.5
    }
}

main()