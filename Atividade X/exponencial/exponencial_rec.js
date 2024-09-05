function main(){
    console.log(exponencial(3,3))
}

function exponencial(n, e){
    let contador = 0
    contador++
    if (contador == e){
        return n
    }
    return n * exponencial(n, e-1)
}

main()