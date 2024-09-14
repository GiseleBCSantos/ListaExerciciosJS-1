# from crud_montadora import add, list_all, update
from crud import add, list_all, update, delete, list_item
from entrada_dados import receber_dados, get_number_in_range
from utils import iniciar_vetores, save_data, load_data, mostrar_menu, processar_operacao

data, dados_montadoras, dados_modelosVeiculos, dados_veiculos = iniciar_vetores()
app_on = True

while app_on:
    mostrar_menu()
    opcao = get_number_in_range(">> ", 0, 4)

    processar_operacao(opcao, data, dados_montadoras)



save_data(data)

load_data(dados_montadoras, dados_modelosVeiculos, dados_veiculos)
