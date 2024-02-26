import { get_valid_number } from "./io.utils.js";

function main(){
    const nota1 = get_valid_number('Insira a sua primeira nota: ')
    const nota2 = get_valid_number('Insira a sua segunda nota: ')

    const media = calcular_media(nota1, nota2)

    console.log(`
    **** BOLETIM ****
        Nota 1: ${nota1};
        Nota 2: ${nota2};
        
        Média: ${calcular_media(nota1, nota2)}
        Situação: ${verificar_aprovado(7, nota1, nota2)}
    `)

    if (media < 7) {
        const nota_final = get_valid_number('Insira a sua nota da prova final: ')

        console.log(`
        Nota prova final: ${nota_final}
        Média após prova final: ${verificar_aprovado(5, media, nota_final)}`)
        

    }

}


function verificar_aprovado(nota_min, nota1, nota2){
    if (calcular_media(nota1, nota2) >= nota_min){
        return 'Aprovado'
    }
    return 'Reprovado'
}


function calcular_media(nota1, nota2){
    return (nota1 + nota2) / 2
}


main()