# from crud_montadora import add, list_all, update
from crud import add, list_all, update, delete, list_item
from entrada_dados import receber_dados, get_number_in_range
from utils import iniciar_vetores, save_data, load_data, mostrar_menu, processar_operacao, get_tipo_crud_atual, mostrar_crud, get_atributos_atuais, loading

data, dados_montadoras, dados_modelosVeiculos, dados_veiculos = iniciar_vetores()
app_on = True
tipo_crud_atual = ''

while app_on:
    mostrar_menu()
    opcao = get_number_in_range(">> ", 0, 5)
    tipo_crud_atual = get_tipo_crud_atual(opcao)
    crud_on = True

    if opcao == 4:
        save_data(data)
        loading("Dados sendo salvos...", "Dados salvos com sucesso \o/")
        app_on = False
    
    elif opcao == 5:
        data = load_data(dados_montadoras, dados_modelosVeiculos, dados_veiculos)
        loading("Dados sendo carregados...", "Dados carregados com sucesso \o/")

    elif opcao > 0 and opcao < 4:

        while crud_on:
            mostrar_crud(tipo_crud_atual, data)
            opcao_crud = get_number_in_range(">> ", 0, 4)

            if opcao_crud != 0:
                atributos_atuais = get_atributos_atuais(opcao, dados_montadoras, dados_modelosVeiculos, dados_veiculos)
                processar_operacao(tipo_crud_atual, opcao_crud, data, atributos_atuais)

            else:
                crud_on = False
    

    else:
        app_on = False


save_data(data)


load_data(dados_montadoras, dados_modelosVeiculos, dados_veiculos)
