function main(){
    console.log(produto(10,3))
}

function produto(a, b){
    let contador = 0
    contador++
    if (contador == b){
        return a
    }
    return a + produto(a, b-1)
}

main()