import random
import time
import os

def get_number(text):
    return int(input(text))


def get_positive_number(text):
    number = int(input(text))
    return number if number > 0 else get_positive_number(text)


def get_negative_number(text):
    number = int(input(text))
    return number if number < 0 else get_negative_number(text)


def get_number_in_range(text, min, max):
    while True:
        try:
            number = int(input(text))
            if min <= number <= max:
                return number
            else:
                print(f"Por favor, insira um número entre {min} e {max}.")
        except ValueError:
            print("Entrada inválida. Por favor, insira um número inteiro.")


def get_random_in_range(min, max):
    return random.randrange(min, max)


def show_loading(text_before, text_after):
    print(text_before)
    time.sleep(2)
    print(text_after)
    time.sleep(1)


def limpar_tela():
    os.system('clear')


def press_enter_to_continue():
    _ = input("ENTER to continue")


def vetor_valido(vetor):
    return True if len(vetor) >= 1 else False
    

def obter_menor_num(vetor):
    menor = vetor[0]
    for number in vetor:
        if number < menor:
            menor = number
    
    return menor


def obter_posicao_menor_num(vetor):
    menor = obter_menor_num(vetor)
    return vetor.index(menor)


def obter_maior_num(vetor):
    maior = vetor[0]
    for number in vetor:
        if number > maior:
            maior = number

    return maior


def obter_posicao_maior_num(vetor):
    maior = obter_maior_num(vetor)
    return vetor.index(maior)

