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

            if resposta_opcao1 == 1:
                tamanho = get_positive_number("Insira o tamanho do seu vetor desejado: ")
                min = get_number("Insira o valor minimo do vetor: ")
                max = get_number("Insira o valor maximo do vetor: ")

                vetor = criar_vetor_aleatorio(tamanho, min, max)

                show_loading("Salvando seus dados...", "Dados salvos")
            
            if resposta_opcao1 == 2:
                show_loading("Seus valores estão sendo carregados...", "Valores carregados com sucesso!!!")
                vetor = carregar_numeros_arquivo("numeros.txt")

        if resposta == 2:
            show_vetor_numbers(vetor)
            press_enter_to_continue()

        if resposta == 3:
            print('2')

        
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
            show_positive_qnt_numbers(vetor)
            press_enter_to_continue()

        if resposta == 9:
            show_negative_qnt_numbers(vetor)
            press_enter_to_continue()

        if resposta == 10:
            mostrar_opcoes_atualizar_valores()
            resposta_opcao10 = get_number_in_range(">> ",1, 6)

            if resposta_opcao10 == 1:
                print("Vetor atual: ", vetor)
                multiplo = get_number("Por qual numero deseja multiplicar todos elementos do vetor? ")
                vetor = multiplicar_elementos(vetor, multiplo)
                print("Novo vetor: ", vetor)
                press_enter_to_continue()

            if resposta_opcao10 == 2:
                print("Vetor atual: ", vetor)
                expoente = get_number("Por qual numero deseja elevar todos elementos do vetor? ")
                vetor = elevar_elementos(vetor, expoente)
                print("Novo vetor: ", vetor)
                press_enter_to_continue()

            if resposta_opcao10 == 3:
                print("Vetor atual: ", vetor)
                fracao = get_number("Por qual numero deseja fracionar todos elementos do vetor? ")
                vetor = fracionar_elementos(vetor, fracao)
                print("Novo vetor: ", vetor)
                press_enter_to_continue()

            if resposta_opcao10 == 4:
                print("Vetor atual: ", vetor)
                vetor = substituir_negativos(vetor)
                print("Novo vetor: ", vetor)
                press_enter_to_continue()

            if resposta_opcao10 == 5:
                print("Vetor atual: ", vetor)
                vetor = ordenar_vetor(vetor)
                print("Novo vetor: ", vetor)
                press_enter_to_continue()

            if resposta_opcao10 == 6:
                print("Vetor atual: ", vetor)
                vetor = embaralhar_vetor(vetor)
                print("Novo vetor: ", vetor)
                press_enter_to_continue()


        if resposta == 11:
            print("Vetor atual: ", vetor)
            vetor = adicionar_novos_valores(vetor)
            print("Novo vetor: ", vetor)
            press_enter_to_continue()

        if resposta == 12:
            print("Vetor atual: ", vetor)
            vetor = remover_valores_vetor(vetor)
            print("Novo vetor: ", vetor)
            press_enter_to_continue()



        if resposta == 13:
            print("Vetor atual: ", vetor)
            vetor = remover_valores_posicao(vetor)
            print("Novo vetor: ", vetor)
            press_enter_to_continue()

        if resposta == 14:
            print("Vetor atual: ", vetor)
            vetor = editar_valor_por_posicao(vetor)
            print("Novo vetor: ", vetor)
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