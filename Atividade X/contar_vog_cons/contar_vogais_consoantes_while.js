import { eh_consoante, eh_vogal, print } from "../../io.utils.js"

function main(){
    contar_vogais_consoantes('o rato roeu a roupa do rei de roma', 0, 0)

}

function contar_vogais_consoantes(frase){
    let vogais = 0
    let consoantes = 0
    let count = 0
    while (count < frase.length){
        if (eh_vogal(frase[count])){
            vogais++
        }
        else if (eh_consoante(frase[count])){
            consoantes++
        }
        count++
    }
    
    print(`Quantidade de vogais: ${vogais}`)
    print(`Quantidade de consoantes: ${consoantes}`)
}

main()