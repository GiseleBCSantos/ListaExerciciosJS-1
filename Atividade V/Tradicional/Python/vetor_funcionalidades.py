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
    

def mostrar_menor_maior_index(vetor):
    if vetor_valido(vetor):
        menor_num = obter_menor_num(vetor)
        index_menor_num = obter_posicao_menor_num(vetor)
        maior_num = obter_maior_num(vetor)
        index_maior_num = obter_posicao_maior_num(vetor)

        print(f"""
> Menor numero do vetor: {menor_num}
> Posicao menor numero: {index_menor_num}
> Maior numero do vetor: {maior_num}
> Posicao menor numero: {index_maior_num}
""")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def mostrar_somatorio_vetor(vetor):
    if vetor_valido(vetor):
        soma = obter_somatorio_vetor(vetor)
        print(f"A soma de todos os elementos do vetor {vetor} é de {soma}.") 
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def mostrar_media_vetor(vetor):
    if vetor_valido(vetor):
        media = obter_media_vetor(vetor)
        print(f"A media de todos os elementos do vetor {vetor} é de {media}.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def show_positive_qnt_numbers(vetor):
    if vetor_valido(vetor):
        show_positive_numbers(vetor)
        qnt_positive_numbers = count_positive_numbers(vetor)
        print(f">>> Existem {qnt_positive_numbers} numeros positivos no vetor.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def show_negative_qnt_numbers(vetor):
    if vetor_valido(vetor):
        show_negative_numbers(vetor)
        qnt_negative_numbers = count_negative_numbers(vetor)
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