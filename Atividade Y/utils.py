import os
from crud import add, list_all, list_item, update, delete, get_contagem
from entrada_dados import receber_dados
import time


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
1) Montadoras
2) Modelos de veiculos
3) Veiculos
4) Salvar e sair
5) Carregar dados

0) Sair
""")
    

def mostrar_crud(tipo, data):
    clear()
    print(f"""
***** CRUD {tipo} *****
>> Temos {len(data[tipo])} {tipo} cadastrados(as)

1) Listar
2) Cadastrar
3) Modificar
4) Excluir
5) Filtrar

0) Sair
""")


def save_data(vetor):
    data = open('dados.txt', 'w')
    #percorrendo os modelos (veiculos, modelosVeiculos e montadoras)
    for tipo in vetor:
        #percorrendo a lista de cada elemento em cada modelo
        for dado in vetor[tipo]:
            #percorrer atributos de cada elemento
            atributos = list(dado.keys())
            for atributo in atributos:
                data.write(f'{dado[atributo]};')
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
        item = linha.replace('\n', '').split(';')[:-1]

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


def processar_operacao(tipo, opcao, data, dados_item):
    if opcao == 1:
        if want_ordenar():
            clear()
            atributo_para_ord = get_atributo(dados_item, "ordenacao")
            sentido_para_ord = get_sentido_para_ord()
            lista_ordenada = ordenacao_bubble(data[tipo], sentido_para_ord, atributo_para_ord)
            list_all(lista_ordenada)
        else:
            list_all(data[tipo])
        press_enter_to_continue()

    if opcao == 2:
        add(data, receber_dados(data, tipo, dados_item), dados_item, tipo)
        press_enter_to_continue()

    if opcao == 3:
        get_contagem(data, tipo)
        posicao_id = int(input(">> "))
        id = data[tipo][posicao_id-1]["id"]
        update(data, tipo, id, receber_dados(data, tipo, data))
    
    if opcao == 4:
        get_contagem(data, tipo)
        posicao_id = int(input(">> "))
        id = data[tipo][posicao_id-1]["id"]
        delete(data, tipo, id)
    
    if opcao == 5:
        atributo_filtragem = get_atributo(dados_item, "filtragem")
        
        if (type(atributo_filtragem) == str):
            filter = input("Qual palavra deseja encotrar? ")
        if (type(atributo_filtragem) == int or type(atributo_filtragem) == float):
            filter = float(input("Qual numero deseja encontrar? "))
        if (type(atributo_filtragem) == bool):
            filter = int(input("Qual tipo deseja filtrar? (1 - True) (2 - False)"))
        
        lista_filtrada = get_filter_elements(data[tipo], atributo_filtragem, filter)
            
        if want_ordenar():
            clear()
            atributo_para_ord = get_atributo(dados_item, "ordenacao")
            sentido_para_ord = get_sentido_para_ord()
            lista_ordenada = ordenacao_bubble(lista_filtrada, sentido_para_ord, atributo_para_ord)
            list_all(lista_ordenada)
        else:
            list_all(lista_filtrada)
        press_enter_to_continue()


        
def get_filter_elements(dados, atributo, filter):
    new_dados = []

    for item in dados:
        if filter in item[atributo]:
            new_dados.append(item)
    
    return new_dados


def want_ordenar():
    select = get_number_in_range("Deseja ordenar a lista antes da exibicao? (1 - sim) (2 - nao) ", 1, 2)
    return select == 1


def get_atributo(dados, tipo):
    for i in range(1, len(dados)):
        print(i, dados[i])
    
    select = get_number_in_range(f"\nSelecione um atributo para {tipo}:\n>> ", 1, len(dados))
    return dados[select]


def get_sentido_para_ord():
    print("""
          
1) Ordenacao ascendente (menor para maior)
2) Ordenacao descendente (maior para menor)
          """)
    
    select = get_number_in_range(">> ", 1, 2)

    return asc if select == 1 else desc
        

def get_tipo_crud_atual(opcao):
    return "montadoras" if opcao == 1 else "modelosVeiculos" if opcao == 2 else "veiculos" if opcao == 3 else None
    

def get_atributos_atuais(opcao, dados_montadoras, dados_modelosVeiculos, dados_veiculos):
    return dados_montadoras if opcao == 1 else dados_modelosVeiculos if opcao == 2 else dados_veiculos if opcao == 3 else []


def loading(text_before, text_after):
    print(text_before)
    time.sleep(2)
    print(text_after)
    time.sleep(1)


def clear():
    os.system('clear')


def press_enter_to_continue():
    _ = input("ENTER to continue ...")


def ordenacao_bubble(lista_dados, sentido, categoria="nome"):
    new_lista = lista_dados[::]
    ultimo_index_nao_ordenado = len(new_lista) -1
    qntd_voltas = 0

    while qntd_voltas < ultimo_index_nao_ordenado:
        for i in range(0, ultimo_index_nao_ordenado):
            if sentido(new_lista[i][categoria], new_lista[i+1][categoria]):
                aux = new_lista[i][categoria]
                new_lista[i][categoria] = new_lista[i+1][categoria]
                new_lista[i+1][categoria] = aux
        qntd_voltas+=1
    
    return new_lista
    

asc = lambda x1, x2 : x1 > x2
desc = lambda x1, x2 : x1 < x2


def get_number_in_range(text, min, max):
    number = int(input(text))
    return number if number <= max or number >= min else get_number_in_range(text, min, max)
