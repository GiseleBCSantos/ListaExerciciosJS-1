function main(){
    sequencia(8, -5)
}

function sequencia(a, b){
    if (a == b){
        console.log(b)
        return b
    }
    if (a < b){
        console.log(a)
        return sequencia(a+1, b)
    }
    if (a > b){
        console.log(a)
        return sequencia(a-1, b)
    }
}

main()