from utils import *

def criar_vetor_aleatorio(tamanho, min, max):
    vetor = []

    for i in range(tamanho):
        vetor.append(get_random_in_range(min, max))
    return vetor


def carregar_numeros_arquivo(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    vetor = []
    linhas = arquivo.readlines()

    for linha in linhas:
        if "." in linha:
            vetor.append(float(linha.replace('\n', '')))
        else:
            vetor.append(int(linha.replace("\n", '')))
    
    return vetor



def show_vetor_numbers(vetor):
    string = ''
    if not vetor_valido(vetor):
        print("Vetor vazio, inicialize um vetor primeiro!")
    else:
        print("**** Números do vetor ****")
        for number in vetor:
            if number > 0:
                string += f"\033[92m {number} \033[0m\t"
            if number < 0:
                string += f"\033[91m {number} \033[0m\t"
    print(string)




def map(vetor, funcao, valor):
    new_vetor = []

    if not vetor_valido(vetor):
        print("Vetor vazio, inicialize um vetor primeiro!")
    else:
        for i in vetor:
            new_vetor.append(funcao(i, valor))

    return new_vetor



trocar_elementos = lambda x : x
multiplicar = lambda atual, multipl : atual * multipl
elevar = lambda atual, potencia : atual**potencia
dividir = lambda atual, divisor : atual/divisor 
substituir_negativo_por_aleatorio = lambda atual, valor : atual if atual > 0 else valor


def reduce(vetor, funcao, valor_inicial):
    if not vetor_valido(vetor):
        print("Vetor nao inicializado!")
        return 0
    else: 
        count = valor_inicial

        for i in vetor:
            count = funcao(count, i)

        return count


contagem_todos = lambda atual : 1

maior_num = lambda atual, proximo : proximo if proximo > atual else atual

menor_num = lambda atual, proximo : proximo if proximo < atual else atual

index_num = lambda vetor, num : vetor.index(num) if vetor.count(num) == 1 else indexes_num(vetor, num)

somar = lambda atual, proximo : atual + proximo

def indexes_num(vetor, num):
    vetor_indexes = []

    for i in range(len(vetor)):
        if vetor[i] == num:
            vetor_indexes.append(i)

    return vetor_indexes


def filter(vetor, condicao):
    if not vetor_valido:
        print("Vetor nao inicializado!")
        return []
    else:
        novo_vetor = []

        for i in vetor:
            if condicao(i):
                novo_vetor.append(i)
        
        return novo_vetor


positive_number = lambda x : x > 0
negative_number = lambda x : x < 0

print_vector_elements = lambda vector : [print(">> ",x) for x in vector]

# def show_positive_numbers(vetor):
#     print("*** Numeros positivos ***")
#     for number in vetor:
#         if number > 0:
#             print(number)

# def count_positive_numbers(vetor):
#     count = 0
#     for number in vetor:
#         if number > 0:
#             count += 1
#     return count


# def show_negative_numbers(vetor):
#     print("*** Numeros negativos ***")
#     for number in vetor:
#         if number < 0:
#             print(number)


# def count_negative_numbers(vetor):
#     count = 0
#     for number in vetor:
#         if number < 0:
#             count += 1
#     return count


# def show_quantidade_itens_vetor(vetor):
#     if not vetor_valido(vetor):
#         print("Vetor nao inicializado!")
#     else:
#         print(f"O vetor possui {len(vetor)} elementos.")


# def obter_somatorio_vetor(vetor):
#     return sum(vetor)


# def obter_media_vetor(vetor):
#     return round((sum(vetor)/len(vetor)), 2)


# def adicionar_novos_valores(vetor):
#     quantidade_novos_valores = int(input("Quantos valores voce vai querer adicionar no vetor? "))
            
#     for i in range(quantidade_novos_valores):
#         number = int(input("Insira o numero para adicionar: "))
#         vetor.append(number)
    
#     return vetor


# def remover_valores_vetor(vetor):
#     qnt_a_remover = int(input("Quantos numeros voce deseja remover? "))

#     for i in range(qnt_a_remover):
#         print("Vetor: ",vetor)
#         number = int(input("Qual numero deseja remover do vetor? "))
#         if number in vetor:
#             while number in vetor:
#                 vetor.remove(number)
#         else:
#             print("Numero nao esta no vetor.")
    
#     return vetor


# def remover_valores_posicao(vetor):
#     string = ''
#     for i in range(len(vetor)):
#         string += f" ({i+1} - {vetor[i]}) \t"
#     print(string)
#     posicao = get_number("Insira a posicao do numero que deseja remover: ") - 1
#     vetor.remove(vetor[posicao])

#     return vetor


# def editar_valor_por_posicao(vetor):
#     posicao = get_number(f"Insira a posicao do numero que deseja editar: (de 0 a {len(vetor)})")
#     novo_valor = get_number("Insira o valor que voce deseja: ")
#     vetor[posicao] = novo_valor

#     return vetor


def salvar_vetor_em_arquivo(vetor):
    numeros = open('numeros.txt', 'w')
    for numero in vetor:
        numeros.write(f'{numero}\n')
    numeros.close()

# def multiplicar_elementos(vetor, multiplo):
#     new_list = []
#     for number in vetor:
#         new_list.append(number*multiplo)
    
#     return new_list

# def elevar_elementos(vetor, expoente):
#     new_list = []
    
#     for number in vetor:
#         new_list.append(number**expoente)
    
#     return new_list


# def fracionar_elementos(vetor, fracao):
#     new_list = []

#     for number in vetor:
#         new_list.append(number/fracao)
    
#     return new_list


# def substituir_negativos(vetor):
#     count = 0
#     new_list = []
#     for number in vetor:
#         if number < 0:
#             print(f"Valor negativo encontrado ({number}). Substitua ele por outro numero aleatorio. Digite o valor minimo e maximo pelo qual ele pode ser substituido:  ")
#             min = get_number("> Min: ")
#             max = get_number("> Max: ")
            
#             new_list.append(get_random_in_range(min,max))
#             count += 1
#         else:
#             new_list.append(number)
    
#     if count == len(vetor):
#         return new_list
#     else:
#         print("Não há valores negativos no vetor!")
#         return new_list



# def ordenar_vetor(vetor):
#     return sorted(vetor)


# def embaralhar_vetor(vetor):
#     new_vetor = []
#     for i in range(len(vetor)):
#         num = random.choice(vetor)
#         new_vetor.append(num)
#         vetor.remove(num)
    
#     return new_vetor
