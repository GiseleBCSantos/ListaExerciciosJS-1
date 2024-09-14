function main(){
    let fatorial_number = getFatorial(5)
    console.log(fatorial_number)
}

function getFatorial(n){
    let fatorial = 1
    for (let i=1;i<=n;i++){
        fatorial *= i
    }
    return fatorial
}

main()