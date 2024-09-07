function main(){
    console.log(fibonacci(2))
}

function fibonacci(n){
    const vector = []

    if (n == 1){
        vector.push(1)
    }
    if (n == 2){
        console.log(fibonacci(n-1))
        console.log(n)
        vector.push(fibonacci(n-1) + n)
    }

    

    return vector


}

main()