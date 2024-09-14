function main(){
    let soma = getSoma([1,2,3,10])
    console.log(soma)
}

function getSoma(vetor){
    let acc = 0
    for (let item of vetor){
        acc += item
    }
    return acc
}

main()