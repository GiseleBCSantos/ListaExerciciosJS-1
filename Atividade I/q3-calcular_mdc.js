import { get_valid_number } from "../io.utils.js";

function main(){
    console.log('*** Calculo de mdc ***')
    const numero1 = get_valid_number('Insira o primeiro número: ')
    const numero2 = get_valid_number('Insira o segundo número: ')

    const mdc = calcular_mdc(numero1, numero2)

    console.log(`O mdc de ${numero1} e de ${numero2} é ${mdc}`)

}


function calcular_mdc(num1, num2){   
    let mdc = 1
    let contador = 2 
        while (num1 > 1 || num2 > 1){
            while (true){
                if (num1 % contador === 0 || num2 % contador === 0){
                    if (num1 % contador === 0 && num2 % contador === 0){
                        num1 /= contador
                        num2 /= contador
                        mdc *= contador
                    }
                    else if (num1 % contador === 0){
                        num1 /= contador
                    }
                    else if (num2 % contador === 0){
                        num2 /= contador
                    }
            }
            else{
                break
            }
        }
        contador++
    }
    return mdc
}


main()