import { print, eh_vogal, eh_consoante, deleteFirstElement } from "../../io.utils.js"

function main(){
    contar_vogais_consoantes('o rato roeu a roupa do rei de roma', 0, 0)
}

function contar_vogais_consoantes(frase, qntd_vogal, qntd_consoante){
    if (frase.length == 0){
        print(`Quantidade de vogais: ${qntd_vogal}`)
        print(`Quantidade de consoantes: ${qntd_consoante}`)
        return
    }

    if (eh_vogal(frase[0])){
        contar_vogais_consoantes(deleteFirstElement(frase), qntd_vogal+1, qntd_consoante)
    }
    else if (eh_consoante(frase[0])){
        contar_vogais_consoantes(deleteFirstElement(frase), qntd_vogal, qntd_consoante+1)
    }
    else{
        contar_vogais_consoantes(deleteFirstElement(frase), qntd_vogal, qntd_consoante)
    }

}

main()