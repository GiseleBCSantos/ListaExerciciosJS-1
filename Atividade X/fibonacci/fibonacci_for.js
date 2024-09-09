function main(){
    let vetor_fibonacci = fibonacci(10)
    console.log(vetor_fibonacci)
}

function fibonacci(n){
    let vector = []

    for (let i=1;i<=n;i++){
        if (i == 1){
            vector.push(0)
        }
        else if (i == 2){
            vector.push(1)
        }
        else{
            vector.push(vector[vector.length-1] + (vector[vector.length-2]))
        }

    }

    return vector
}

main()