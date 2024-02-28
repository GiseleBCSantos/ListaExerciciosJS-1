import { question } from "readline-sync";

function main(){
    const letra = question('Insira uma letra: ')

    const tipo_letra = determinar_tipo_letra(letra.toLocaleLowerCase())

    console.log(`A letra ${letra} é uma ${tipo_letra}.`)

}

function determinar_tipo_letra(letra){
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        return 'vogal'
    }
    return 'consoante'
}

main()