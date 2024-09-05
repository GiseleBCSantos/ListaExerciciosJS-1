function main(){
    console.log(somar([1,2,3,4,5,6]))
}

function somar(vetor){
    if (vetor.length == 1){
        return vetor[0]
    }
    const elemento = vetor.pop()
    
    return elemento + somar(vetor)
}

main()