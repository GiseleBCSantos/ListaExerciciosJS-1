import { question } from "readline-sync";

function main(){
    const sexo_inserido = question('Insira uma letra: ')

    const sexo = determinar_sexo(sexo_inserido.toUpperCase())

    console.log(`*** Determinação de sexo ***
    >> ${sexo}`)



}

function determinar_sexo(value){
    if (value == 'M'){
        return 'M - Masculino'
    }
    else if (value == 'F'){
        return 'F - Feminino'
    }
    return 'Sexo inválido!'
}



main()