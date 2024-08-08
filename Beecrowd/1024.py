def eh_letra(char):
    return eh_maiusculo(char) or eh_minusculo(char)


def eh_maiusculo(char):
    return ord(char) >= 65 and ord(char) <= 90


def eh_minusculo(char):
    return ord(char) >= 97 and ord(char) <= 122


def obter_caractere_ascii(num):
    return chr(num)


def obter_num_ascii(letra):
    return ord(letra)


def obter_codificacao1(list):
    new_list = []

    for codigo in list:
        new_codigo = ''
        for l in codigo:
            if not eh_letra(l):
                new_codigo += l
            else:
                new_codigo += obter_caractere_ascii(obter_num_ascii(l) + 3)
        new_list.append(new_codigo)

    return new_list


def inverter_string(string):
    return string[::-1]


def obter_codificacao2(list):
    new_list = []

    for codigo in list:
        new_codigo = inverter_string(codigo)
        new_list.append(new_codigo)

    return new_list


def eh_metade(index, length):
    return index < int(length/2)


def obter_codificacao3(list):
    new_list = []

    for codigo in list:
        new_codigo = ''
        for i, l in enumerate(codigo):
            if eh_metade(i, len(codigo)):
                new_codigo += l
            else:
                new_codigo += obter_caractere_ascii(obter_num_ascii(l) - 1)

        new_list.append(new_codigo)

    return new_list


def obter_num_inteiro():
    return int(input())


def main():
    qnt_testes = obter_num_inteiro()
    lista_entradas = []


    for i in range(qnt_testes):
        codigo = input()
        lista_entradas.append(codigo)


    resultado_decodificador1 = obter_codificacao1(lista_entradas)
    resultado_decodificador2 = obter_codificacao2(resultado_decodificador1)
    resultado_decodificador3 = obter_codificacao3(resultado_decodificador2)

    print(resultado_decodificador1)
    print(resultado_decodificador2)
    print(resultado_decodificador3)

    for i in resultado_decodificador3:
        print(i)


if __name__ == '__main__':
    main()