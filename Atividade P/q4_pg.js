import { get_number } from "../io.utils.js"

function main(){
    const num_inicial = get_number('Insira um valor pra A0: ')
    const limite = get_number('Insira um valor para o limite: ')
    const razao = get_number('Insira um valor para a razao: ')

    mostrar_pg(num_inicial, limite, razao)
}

function mostrar_pg(inicial, limite, razao){
    let posicao = 1
    for (let i = inicial; i <= limite; i *= razao){
        console.log(`Número ${posicao}: ${i}`)
        posicao ++
    }
}

main()