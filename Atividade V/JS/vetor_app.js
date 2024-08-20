import {get_number, get_number_in_range, get_positive_number, get_random_in_range, press_enter_to_continue, show_loading, sleep} from './utils.js'
import { mostrar_menu, mostrar_opcoes_inicializar_vetor_numerico } from './vetor_funcionalidades.js'
import { criar_vetor_aleatorio, mostrar_valores_vetor } from './vetor_utils.js'


async function main(){
    console.log(">>>> Bem vindo ao Catch App <<<<")

    let app_on = true
    let vetor = []

    while (app_on){
        console.clear()
        mostrar_menu()

        let resposta = get_number_in_range(">> ", 1, 16)
        console.log(resposta)

        if (resposta === 1){
            mostrar_opcoes_inicializar_vetor_numerico()
            let resposta_opcao1 = get_number_in_range(">> ", 1, 2)

            if (resposta_opcao1 == 1){
                let tamanho = get_positive_number("Insira o tamanho do seu vetor desejado: ")
                let min = get_number("Insira o valor minimo do vetor: ")
                let max = get_number("Insira o valor maximo do vetor: ")

                vetor = criar_vetor_aleatorio(vetor, tamanho, min, max)


                await show_loading("Salvando seus dados...", "Dados salvos")

            }
            else if (resposta_opcao1 == 2){
                
            }

        }
        else if (resposta === 2){
            if (vetor.length === 0){
                console.log("Vetor vazio, inicialize um vetor primeiro!")
            }
            else{
                for (let number of vetor){
                    console.log("> " + number)
                }
            }
            
        }
        else if (resposta === 3){
            console.log('entrou 3')
            press_enter_to_continue()
        }
        else if(resposta === 4){
            console.log('entrou 4')
        }
        else if(resposta === 5){
            console.log('entrou 5')
        }
        else if(resposta === 6){
            console.log('entrou 6')
        }
        else if(resposta === 7){
            console.log('entrou 7')
        }
        else if(resposta === 8){
            console.log('entrou 8')
        }
        else if(resposta === 9){
            console.log('entrou 9')
        }
        else if(resposta === 10){
            console.log('entrou 10')
        }
        else if(resposta === 11){
            console.log('entrou 11')
        }
        else if(resposta === 12){
            console.log('entrou 12')
        }
        else if(resposta === 13){
            console.log('entrou 13')
        }
        else if(resposta === 14){
            console.log('entrou 14')
        }
        else if(resposta === 15){
            console.log('entrou 1')
        }
        else if(resposta === 16){
            await show_loading("Seus valores estão sendo salvos...", "Até a proxima o/")
            app_on = false
        }
        
    }
    



}

main()