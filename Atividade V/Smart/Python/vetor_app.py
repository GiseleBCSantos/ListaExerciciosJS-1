from vetor_funcionalidades import *
from utils import *
from vetor_utils import *
import os



def main():
    print('">>>> Bem vindo ao Catch App <<<<"')

    app_on = True
    vetor = []

    while (app_on):
        limpar_tela()
        mostrar_menu()
        resposta = get_number_in_range(">> ", 1, 16)
        if resposta == 1:
            mostrar_opcoes_inicializar_vetor_numerico()
            resposta_opcao1 = get_number_in_range(">> ", 1, 2)
            vetor = gerar_vetor(resposta_opcao1)


        if resposta == 2:
            show_vetor_numbers(vetor)
            press_enter_to_continue()


        if resposta == 3:
            vetor = reset_vetor_numbers(vetor)
            
        
        if resposta == 4:
            show_quantidade_itens_vetor(vetor)
            press_enter_to_continue()


        if resposta == 5:
            mostrar_menor_maior_index(vetor)
            press_enter_to_continue()

            
        if resposta == 6:
            mostrar_somatorio_vetor(vetor)
            press_enter_to_continue()


        if resposta == 7:
            mostrar_media_vetor(vetor)
            press_enter_to_continue()


        if resposta == 8:
            show_numbers_qntd(vetor, positive_number, "positivos")
            press_enter_to_continue()


        if resposta == 9:
            show_numbers_qntd(vetor, negative_number, "negativos")
            press_enter_to_continue()


        if resposta == 10:
            mostrar_opcoes_atualizar_valores(vetor)
            if vetor_valido(vetor):
                resposta_opcao10 = get_number_in_range(">> ",1, 6)
                vetor = modificar_vetor(vetor, resposta_opcao10)
            press_enter_to_continue()
            

        if resposta == 11:
            vetor = vector_operation(vetor, add_number)
            press_enter_to_continue()

        if resposta == 12:
            vetor = vector_operation(vetor, remove_number)
            press_enter_to_continue()


        if resposta == 13:
            vetor = remover_valores_posicao(vetor)
            press_enter_to_continue()

        if resposta == 14:
            vetor = editar_valor_por_posicao(vetor)
            press_enter_to_continue()

        if resposta == 15:
            show_loading("Seus valores estão sendo salvos...", "Valores salvos com sucesso!!!")
            salvar_vetor_em_arquivo(vetor)


        if resposta == 16:
            salvar_vetor_em_arquivo(vetor)
            show_loading("Seus valores estão sendo salvos...", "Até a proxima o/")
            app_on = False

        
if __name__ == '__main__':
    main()