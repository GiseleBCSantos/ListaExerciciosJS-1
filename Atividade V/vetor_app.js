import {get_number_in_range} from './utils.js'
import { mostrar_menu } from './vetor_funcionalidades.js'


function main(){
    console.log(">>>> Bem vindo ao Catch App <<<<")

    let app_on = true

    while (app_on){
        console.clear()
        mostrar_menu()
        let resposta = get_number_in_range(">> ", 1, 16)

        if (resposta === 1){

        }
        else if (resposta === 2){
            
        }
        else if (resposta === 3){

        }
        else if(resposta === 4){

        }
        else if(resposta === 5){

        }
        else if(resposta === 6){

        }
        else if(resposta === 7){

        }
        else if(resposta === 8){

        }
        else if(resposta === 9){

        }
        else if(resposta === 10){

        }
        else if(resposta === 11){

        }
        else if(resposta === 12){

        }
        else if(resposta === 13){

        }
        else if(resposta === 14){

        }
        else if(resposta === 15){

        }
        else if(resposta === 16){
            console.log("Seus valores estão sendo salvos...")
            setTimeout(() => {
                console.log("Até a proxima o/")
            }, "1000")
            app_on = false
        }
        
    }
    



}

main()