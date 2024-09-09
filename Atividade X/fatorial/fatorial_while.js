function main(){
    let fatorial_number = getFatorial(5)
    console.log(fatorial_number)
}

function getFatorial(n){
    let fatorial = 1
    let count = 1
    while(count<=n){
        fatorial *= count
        count++
    }
    return fatorial
}

main()