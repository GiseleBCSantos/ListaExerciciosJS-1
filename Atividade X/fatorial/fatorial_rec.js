function main(){
    console.log(fatorial(5))
}

function fatorial(n){
    return n == 1 ? 1 : n * fatorial(n-1)
}

main()