import { print } from "../../io.utils.js"

function main(){
    showSequencia_a_b(35, 20)
}

function showSequencia_a_b(a, b){
        if (a > b){
            for (let i=a;i>=b;i--){
                print(i)
            }
        }
        if (a < b){
            for (let i=a;i<=b;i++){
                print(i)
            }
        }
}

main()