import { get_valid_number } from "../io.utils.js";

function main(){
    console.log('*** Calculo de MMC ***')
    const numero1 = get_valid_number('Insira o primeiro número: ')
    const numero2 = get_valid_number('Insira o segundo número: ')

    const mmc = calcular_mmc(numero1, numero2)

    console.log(`O mmc de ${numero1} e de ${numero2} é ${mmc}`)

}


function calcular_mmc(num1, num2){
    let mmc = 1
    let contador = 2

    while (num1 > 1 || num2 > 1){
        while (true){
            if (num1 % contador === 0 || num2 % contador === 0){
                if (num1 % contador === 0 && num2 % contador === 0){
                    num1 /= contador
                    num2 /= contador
                    mmc *= contador
                }
                else if (num1 % contador === 0){
                    num1 /= contador
                    mmc *= contador
                }
                else if (num2 % contador === 0){
                    num2 /= contador
                    mmc *= contador
                }
        }
        else{
            break
        }
    }
    contador++
}
return mmc
}


main()