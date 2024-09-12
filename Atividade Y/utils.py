import os
from crud import add, list_all, list_item, update, delete, get_contagem
from entrada_dados import receber_dados

def iniciar_vetores():
    data = {
        "montadoras": [],
        "modelosVeiculos":[],
        "veiculos": []
    }
    dados_montadoras = ['id', 'nome', 'pais', 'ano_fundacao']
    dados_modelosVeiculos = ["id", "nome", "montadora_id", "valor_referencia", "motorizacao", "turbo", "automatico"]
    dados_veiculos = ["id", "modelo_id", "cor", "ano_fabricacao", "ano_modelo", "valor", "placa", "vendido"]
    
    return data, dados_montadoras, dados_modelosVeiculos, dados_veiculos


def mostrar_menu():
    clear()
    print("""
***** MENU *****
1) Listar
2) Cadastrar
3) Modificar
4) Excluir
5) Salvar em arquivo

0) Sair
""")


def save_data(vetor):
    data = open('dados.txt', 'w')
    #modelos
    for tipo in vetor:
        #percorrendo a lista
        for dado in vetor[tipo]:
            #percorrer atributos
            atributos = list(dado.keys())
            for atributo in atributos:
                data.write(f'{dado[atributo]}-')
            data.write("\n")
        data.write("*\n")
    data.close()


def load_data(dados_montadoras, dados_modelosVeiculos, dados_veiculos):
    arquivo = open("dados.txt", 'r')
    dicionario = {"montadoras": [], "modelosVeiculos":[], "veiculos":[]}
    tipos = list(dicionario.keys())
    count = 0
    linhas = arquivo.readlines()
    for linha in linhas:
        item = linha.replace('\n', '').split('-')[:-1]

        if len(item) == len(dados_montadoras):
            new_dict = dict(zip(dados_montadoras, item))
            dicionario[tipos[count]].append(converter_dados(new_dict, 'montadoras'))

        if len(item) == len(dados_modelosVeiculos):
            new_dict = dict(zip(dados_modelosVeiculos, item))
            dicionario[tipos[count]].append(converter_dados(new_dict, 'modelosVeiculos'))
        
        if len(item) == len(dados_veiculos):
            new_dict = dict(zip(dados_veiculos, item))
            dicionario[tipos[count]].append(converter_dados(new_dict, 'veiculos'))
        
        # if len(item) > 3:
        #     dict[tipos[count]].append(item)
        if '*' in linha:
            count += 1

    print(dicionario)
    return dicionario


    

def converter_dados(dicionario, tipo):
    dicionario['id'] = int(dicionario['id'])

    if tipo == "montadoras":
        dicionario['ano_fundacao'] = int(dicionario['ano_fundacao'])
        return dicionario

    if tipo == 'modelosVeiculos':
        dicionario['montadora_id'] = int(dicionario['montadora_id'])
        dicionario['valor_referencia'] = int(dicionario['valor_referencia'])
        dicionario['motorizacao'] = int(dicionario['motorizacao'])
        dicionario['turbo'] = bool(dicionario['turbo'])
        dicionario['automatico'] = bool(dicionario['automatico'])
        return dicionario

    if tipo == 'veiculos':
        dicionario['modelo_id'] = int(dicionario['modelo_id'])
        dicionario['ano_fabricacao'] = int(dicionario['ano_fabricacao'])
        dicionario['ano_modelo'] = int(dicionario['ano_modelo'])
        dicionario['vendido'] = bool(dicionario['vendido'])
        dicionario['valor'] = float(dicionario['valor'])
        return dicionario


def processar_operacao(opcao, data, dados_item):
    if opcao == 1:
        list_all(data, "montadoras")
        press_enter_to_continue()

    if opcao == 2:
        add(data, receber_dados("montadoras", dados_item), dados_item, "montadoras")
        press_enter_to_continue()

    if opcao == 3:
        get_contagem(data, "montadoras")
        posicao_id = int(input(">> "))
        id = data["montadoras"][posicao_id-1]["id"]
        update(data, "montadoras", id, receber_dados("montadoras", data))
    
    if opcao == 4:
        get_contagem(data, "montadoras")
        posicao_id = int(input(">> "))
        id = data["montadoras"][posicao_id-1]["id"]
        delete(data, "montadoras", id)
    
    if opcao == 5:
        save_data(data)
    










































def clear():
    os.system('clear')


def press_enter_to_continue():
    _ = input("ENTER to continue ...")