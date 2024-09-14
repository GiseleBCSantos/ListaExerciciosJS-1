function main(){
    let soma = getSoma([1,2,3,10,4])
    console.log(soma)
}

function getSoma(vetor){
    let acc = 0
    let posicao_atual = 0
    while (posicao_atual < vetor.length){
        acc += vetor[posicao_atual]
        posicao_atual++
    }
    return acc
}

main()