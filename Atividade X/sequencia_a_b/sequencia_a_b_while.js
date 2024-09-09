import { print } from "../../io.utils.js"

function main(){
    showSequencia_a_b(48,43)
}

function showSequencia_a_b(a, b){
        if (a > b){
            while (a >= b){
                print(a)
                a--
            }
        }
        if (a < b){
            while (a <= b){
                print(a)
                a++
            }
        }
}

main()