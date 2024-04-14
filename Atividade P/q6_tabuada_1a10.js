function main(){
    mostrar_tabuada_1aN(10)
}

function mostrar_tabuada_1aN(limite){
    for (let i = 1; i <= limite; i++){
        for (let j = 1; j <= limite; j++){
            console.log(`${j} x ${i} = ${i*j}`)
        }
    }
}

main()