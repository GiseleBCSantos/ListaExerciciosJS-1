import { get_valid_number } from "./io.utils.js";

function main(){
    console.log('Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste terceiro número é exatamente o número original de quatro dígitos.\n')
    const numero_inserido = get_valid_number('Insira um número para testar se obecede a regra: ')

    const resposta = verificar_regra(numero_inserido)

    console.log(resposta)


}


function verificar_regra(number){
    if (number / 1000 > 1){
        const milhar_centena = Math.floor(number / 100)
        const dezena_unidade = number % 100
        const soma_milcen_dezuni = milhar_centena + dezena_unidade

        if (soma_milcen_dezuni**2 === number){
            return 'Número obedece a regra!'
        }
        else{
            return 'Número não obedece a regra!'
        }
    }
    else{
        return 'Número inválido!'
    }
}

main()