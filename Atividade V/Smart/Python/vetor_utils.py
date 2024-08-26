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


def map(vetor, funcao, valor):
    new_vetor = []

    if not vetor_valido(vetor):
        print("Vetor vazio, inicialize um vetor primeiro!")
    else:
        for i in vetor:
            new_vetor.append(funcao(i, valor))

    return new_vetor


trocar_elementos = lambda atual, trocado : trocado
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

ordenar_vetor = lambda vector : sorted(vector)
size_vector = lambda vector : len(vector)

adicionar_item_vetor = lambda vetor, x : vetor + [x]
remover_item_vetor = lambda vetor, x : eliminar_todas_ocorrencias(vetor, x)


def eliminar_todas_ocorrencias(vetor, x):
    while x in vetor:
        vetor.remove(x)
    return vetor


def remover_valores_posicao(vetor):
    if vetor_valido(vetor):
        string = ''
        for i in range(len(vetor)):
            string += f" ({i+1} - {vetor[i]}) \t"
        print(string)
        posicao = get_number("Insira a posicao do numero que deseja remover: ") - 1
        vetor.remove(vetor[posicao])
        print("Novo vetor: ", vetor)

        return vetor
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")
        return []


trocar_valor = lambda vetor, posicao, valor : [valor if posicao == index else valor_atual for index, valor_atual in enumerate(vetor)]


def salvar_vetor_em_arquivo(vetor):
    numeros = open('numeros.txt', 'w')
    for numero in vetor:
        numeros.write(f'{numero}\n')
    numeros.close()


def embaralhar_vetor(vetor, new_vetor):
    if len(vetor) == 0:
        return new_vetor
    
    num = random.choice(vetor)
    new_vetor.append(num)
    vetor.remove(num)

    return embaralhar_vetor(vetor, new_vetor)
    
remove_number = lambda vector, number : remover_item_vetor(vector, number)
add_number = lambda vector, number : adicionar_item_vetor(vector, number)