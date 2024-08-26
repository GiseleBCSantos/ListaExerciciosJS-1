import { mostrar_menu_inicial, mostrar_menu_iniciar_vetor, criar_vetor  } from "./vetor_funcionalidades.js"
import {get_number_in_range, get_positive_number, press_enter_to_continue, show_loading, print, get_number} from './utils.js'
import { criar_vetor_aleatorio, mostrar_valores_vetor, map, reduce } from "./vetor_utils.js"


function main() {
    let app_on = true
    let vetor = []

    while (app_on){
        mostrar_menu_inicial()
        const resposta_menu_inicial = get_number_in_range(1, 16,">> ")

        if (resposta_menu_inicial == 1){
            mostrar_menu_iniciar_vetor()
            vetor = criar_vetor()
            // const resposta_iniciar_vetor = get_number_in_range(1,2,">> ")

            // if (resposta_iniciar_vetor == 1){
            //     const tamanho = get_positive_number("Insira o tamanho do seu vetor: ")
            //     const min = get_number("Insira o valor minimo: ")
            //     const max = get_number("Insira o valor maximo: ")
            //     vetor = criar_vetor_aleatorio(tamanho, min, max)
            // }
            // if (resposta_iniciar_vetor == 2){

            // }

            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 2){
            const show_vetor = mostrar_valores_vetor(vetor)
            print(show_vetor)
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 3){
            const valor_reset = get_number("Por qual valor voce quer resetar todos os itens da sua lista? ")
            vetor = map(vetor, elem => valor_reset)
            print(vetor)
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 4){
            const qntd_itens_vetor = reduce(vetor, elem => 1)
            print(`O seu vetor possui ${qntd_itens_vetor} elementos. `)
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 5){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 6){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 7){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 8){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 9){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 10){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 11){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 12){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 13){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 14){
            press_enter_to_continue()
        }
        if (resposta_menu_inicial == 15){
            press_enter_to_continue()
        }

        if (resposta_menu_inicial == 16){
            show_loading("Salvando seus dados...", "Dados salvos! Ate a proxima o/")
            app_on = false
        }
    }

}


main()