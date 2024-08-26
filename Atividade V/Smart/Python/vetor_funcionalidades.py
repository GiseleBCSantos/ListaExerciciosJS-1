from utils import *
from vetor_utils import *

def mostrar_menu():
    print("""
***** MENU *****
1) Inicializar vetor numérico
2) Mostrar todos os valores
3) Resetar valores
4) Ver quantidade de itens no vetor
5) Ver menor e maior valores e suas posições 
6) Somatório dos valores
7) Média dos valores
8) Mostrar valores positivos e quantidade
9) Mostrar valores negativos e quantidade
10) Atualizar todos os valores por uma regra (selecione para ver regras disponiveis)
11) Adicionar novos valores
12) Remover itens por valor exato
13) Remover por posição
14) Editar valor especifico por posição
15) Salvar valores em arquivo
16) Sair
""")
    

def mostrar_opcoes_inicializar_vetor_numerico():
    print("""
1) Usar um vetor gerado aleatoriamente
2) Carregar valores de um arquivo 
""")
    

# def resetar_vetor(vetor, num):
#     new_vetor = []

#     for i in range(len(vetor)):
#         new_vetor.append(num)

#     return new_vetor
    

def mostrar_menor_maior_index(vetor):
    if vetor_valido(vetor):
        menor_numero = reduce(vetor, menor_num, vetor[0])
        index_menor_num = index_num(vetor, menor_numero)
        maior_numero = reduce(vetor, maior_num, vetor[0])
        index_maior_num = index_num(vetor, maior_numero)


        print(f"""
> Menor numero do vetor: {menor_numero}
> Posicao menor numero: {index_menor_num}
> Maior numero do vetor: {maior_numero}
> Posicao menor numero: {index_maior_num}
""")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def mostrar_somatorio_vetor(vetor):
    if vetor_valido(vetor):
        soma = reduce(vetor, somar, 0)
        print(f"A soma de todos os elementos do vetor {vetor} é de {soma}.") 
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def mostrar_media_vetor(vetor):
    if vetor_valido(vetor):
        soma = reduce(vetor, somar, 0)
        media = round(soma/len(vetor), 2)
        print(f"A media de todos os elementos do vetor {vetor} é de {media}.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def show_positive_qnt_numbers(vetor):
    if vetor_valido(vetor):
        positive_numbers = filter(vetor, positive_number)
        print_vector_elements(positive_numbers)
        qnt_positive_numbers = len(positive_numbers)
        print(f">>> Existem {qnt_positive_numbers} numeros positivos no vetor.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def show_negative_qnt_numbers(vetor):
    if vetor_valido(vetor):
        negative_numbers = filter(vetor, negative_number)
        print_vector_elements(negative_numbers)
        qnt_negative_numbers = len(negative_numbers)
        print(f">>> Existem {qnt_negative_numbers} numeros negativos no vetor.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def mostrar_opcoes_atualizar_valores():
    print("""
1) Multiplicar por um valor
2) Elevar a um valor (exponenciação)
3) Reduzir a uma fração (pedir a fração ex: 1/5)
4) Substituir valores negativos por numeros aleatorios de uma faixa (min, max)
5) Ordenar valores (reverse?)
6) Embaralhar valores
""")