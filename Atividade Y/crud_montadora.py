from ulid import ULID
from utils import get_number_in_range

# CRUD MONTADORA
def add(vetor, nome, pais, ano_fundacao):
    new_data = [int(ULID()), nome, pais, ano_fundacao]
    if len(vetor[0]) == len(new_data):
        vetor.append(new_data)
    else:
        print("Operacao invalida")


def list_all(vetor):
    for linha in vetor:
        if vetor.index(linha) != 0:
            print(f"""
ID: {linha[0]}
Nome: {linha[1]}
Pais: {linha[2]}
Ano de funcacao: {linha[3]}
""")
            
def list_names(vetor):
    for i in range(1, len(vetor) + 1):
        if i != 1:
            print(f'{i} - {vetor[i-1][1]}')

# def list_atributos(vetor):
#     for i in range(1, len(vetor)):
#         if i != 0:
#             print(f'{i} - {vetor[i]}')
            
def update(vetor):
    list_names(vetor)
    opcao_montadora = get_number_in_range("Qual montadora deseja alterar? ", 1, len(vetor))
    # list_atributos(vetor[opcao_montadora-1])
    # opcao_atributo = get_number_in_range("Qual atributo deseja modificar? ", 1, len(vetor[0] - 1))
    novo_nome = input("Digite o novo nome: ")
    novo_pais = input("Digite o novo pais: ")
    novo_ano_funcacao = int(input("Digite o novo ano de fundacao: "))

    vetor[opcao_montadora-1][1] = novo_nome
    vetor[opcao_montadora-1][2] = novo_pais
    vetor[opcao_montadora-1][3] = novo_ano_funcacao