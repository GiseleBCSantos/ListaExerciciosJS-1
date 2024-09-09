function main(){
    let vector = []
    console.log(show_fibonacci(20, vector))
}

function fibonacci(n){
    if (n == 1){
        return 0
    }
    if (n == 2){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

function show_fibonacci(n, vector){
    if (n == 0){
        return vector
    }
    vector.splice(0,0,fibonacci(n))
    show_fibonacci(n-1, vector)
    return vector
}

main()