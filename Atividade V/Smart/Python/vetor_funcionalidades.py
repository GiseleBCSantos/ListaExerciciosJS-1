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
    

def gerar_vetor(resposta):
    if resposta == 1:
            tamanho = get_positive_number("Insira o tamanho do seu vetor desejado: ")
            min = get_number("Insira o valor minimo do vetor: ")
            max = get_number("Insira o valor maximo do vetor: ")

            show_loading("Salvando seus dados...", "Dados salvos")
            return criar_vetor_aleatorio(tamanho, min, max)

            
    if resposta == 2:
        show_loading("Seus valores estão sendo carregados...", "Valores carregados com sucesso!!!")
        return carregar_numeros_arquivo("numeros.txt")
    

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
            if number == 0:
                string += f"{number}\t"
    print(string)


def reset_vetor_numbers(vetor):
    if vetor_valido(vetor):
        number = int(input("Por qual numero voce deseja trocar cada elemento do vetor? "))
        vetor = map(vetor, trocar_elementos,  number)
        show_loading("Trocando elementos...", "Elementos trocados com sucesso!")
        return vetor
    else:
        print("Vetor invalido!")
        press_enter_to_continue()
        return []


def show_quantidade_itens_vetor(vetor):
    if vetor_valido:
        qntd_itens_vetor = size_vector(vetor)
        print("Quantidade de itens: ", qntd_itens_vetor)
    else:
        print("Vetor !")
        return []
  

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
        media = round(soma/size_vector(vetor), 2)
        print(f"A media de todos os elementos do vetor {vetor} é de {media}.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def show_numbers_qntd(vetor, function, string):
    if vetor_valido(vetor):
        print(f"*** Numeros {string} ***")
        numbers = filter(vetor, function)
        print_vector_elements(numbers)
        qnt_numbers = len(numbers)
        print(f">>> Existem {qnt_numbers} numeros {string} no vetor.")
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")


def mostrar_opcoes_atualizar_valores(vetor):
    if vetor_valido(vetor):
        print("""
1) Multiplicar por um valor
2) Elevar a um valor (exponenciação)
3) Reduzir a uma fração (pedir a fração ex: 1/5)
4) Substituir valores negativos por numeros aleatorios de uma faixa (min, max)
5) Ordenar valores (reverse?)
6) Embaralhar valores
    """)
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")
    



def modificar_vetor(vetor, resposta_opcao10):
    if resposta_opcao10 == 1:
        vetor = update_vector(vetor, multiplicar, "multiplicar")
        return vetor
    

    if resposta_opcao10 == 2:
        vetor = update_vector(vetor, elevar, "elevar")
        return vetor
        

    if resposta_opcao10 == 3:
        vetor = update_vector(vetor, dividir, "dividir")
        return vetor
    

    if resposta_opcao10 == 4:
        print("Vetor atual: ", vetor)
        min = get_number("Valor minimo: ")
        max = get_number("Valor maximo: ")
        vetor = map(vetor, substituir_negativo_por_aleatorio, get_random_in_range(min, max))
        print("Novo vetor: ", vetor)
        return vetor
    

    if resposta_opcao10 == 5:
        print("Vetor atual: ", vetor)
        vetor = ordenar_vetor(vetor)
        print("Novo vetor: ", vetor)
        return vetor
    

    if resposta_opcao10 == 6:
        print("Vetor atual: ", vetor)
        vetor = embaralhar_vetor(vetor,[])
        print("Novo vetor: ", vetor)
        return vetor


def update_vector(vector, function, string):
    print("Vetor atual: ", vector)
    operador = get_number(f"Por qual numero deseja {string} todos elementos do vetor? ")
    vector = map(vector, function, operador)
    print("Novo vetor: ", vector)
    return vector


def vector_operation(vector, funcao):
    if vetor_valido(vector):
        print("Vetor atual: ", vector)
        number = get_number("Qual numero desejado? ")
        vector = funcao(vector, number)
        print("Novo vetor: ", vector)
        return vector
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")
        return []


def remove_number_by_index(vector):
    vector = remover_valores_posicao(vector)
    print("Novo vetor: ", vector)
    return vector


def editar_valor_por_posicao(vetor):
    if vetor_valido(vetor):
        print("Vetor atual: ", vetor)
        posicao = get_number(f"Insira a posicao do numero que deseja editar: (de 0 a {len(vetor)}) ")
        novo_valor = get_number("Insira o valor que voce deseja: ")
        vetor = trocar_valor(vetor, posicao, novo_valor)
        print("Novo vetor: ", vetor)

        return vetor
    else:
        print("Vetor vazio, inicialize um vetor primeiro!")
        return vetor