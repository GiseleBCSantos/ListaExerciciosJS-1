import { get_number } from "./io.utils.js";


function main(){
    const numeroInserido = get_number('Insira um número para ser arredondado: ')

    const numeroArredondado = arredondamento(numeroInserido)

    console.log(`
    >>> Arredondamento <<<
    
    > Número: ${numeroInserido}
    > Arredondamento = ${numeroArredondado}
    `)


}


function arredondamento(number){
    if (number - Math.floor(number) >= 0.5){
        return Math.floor(number) + 1
    }
    else{
        return Math.floor(number) 
    }
}

main()