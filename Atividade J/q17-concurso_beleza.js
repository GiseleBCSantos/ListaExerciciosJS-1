import { get_valid_number, get_text } from "../io.utils.js";

function main(){
    let mais_alta = ''
    let altura_mais_alta = 0
    let mais_baixa = ''
    let altura_mais_baixa = 9
    let mais_magra = ''
    let peso_mais_magra = 2000
    let mais_gorda = ''
    let peso_mais_gorda = 0

    console.log('>>> Bem vindo ao concurso de beleza! <<<')
    console.log('Cadastre-se já >> ')

    while (true){
        let nome = get_text('Insira seu nome: ')
        if (nome.toUpperCase() === 'FIM'){
            break
        }
        let altura = get_valid_number('Insira sua altura: ')
        let peso = get_valid_number('Insira seu peso: ')

        if (altura > altura_mais_alta){
            mais_alta = nome
            altura_mais_alta = altura
        }

        if (altura < altura_mais_baixa){
            mais_baixa = nome
            altura_mais_baixa = altura
        }

        if (peso > peso_mais_gorda){
            mais_gorda = nome
            peso_mais_gorda = peso
        }

        if (peso < peso_mais_magra){
            mais_magra = nome
            peso_mais_magra = peso
        }
        
    }

    console.log(`
    Candidata mais alta: ${mais_alta}
    Candidata mais baixa: ${mais_baixa}
    Candidata mais magra: ${mais_magra}
    Candidata mais gorda ${mais_gorda}
    `)


}

main()