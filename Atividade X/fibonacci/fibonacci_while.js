function main(){
    let vetor_fibonacci = fibonacci(10)
    console.log(vetor_fibonacci)
}

function fibonacci(n){
    let vector = []
    let count = 1
    while (count < n){
        if (count == 1){
            vector.push(0)
        }
        else if (count == 2){
            vector.push(1)
        }
        else{
            vector.push(vector[vector.length-1] + (vector[vector.length-2]))
        }
        count++
    }

    return vector
}

main()