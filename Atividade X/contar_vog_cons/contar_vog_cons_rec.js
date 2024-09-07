function main(){
    console.log(conta_recursiva("hg"))
}

function conta_recursiva(frase, qntd_vogais=0, qntd_consoantes=0){
    if (frase.length == 0){
        return `Quantidade vogais: ${qntd_vogais}\nQuantidade consoantes: ${qntd_consoantes}`
    }
    let elemento_atual = frase[0]

    if (eh_vogal(elemento_atual)){
        return conta_recursiva(frase.slice(1),qntd_vogais+1, qntd_consoantes)
    }
    if (eh_consoante(elemento_atual)){
        return conta_recursiva(frase.slice(1), qntd_vogais, qntd_consoantes+1)
    }
}


function eh_vogal(letra){
    return /^[aeiou]$/.test(letra.toLowerCase())
}

function eh_consoante(letra){
    return /^[a-z]$/.test(letra.toLowerCase()) && ! eh_vogal(letra)
}



main()