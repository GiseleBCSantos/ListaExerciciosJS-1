from ulid import ULID
# from utils import get_number_in_range


def receber_dados(tipo, dados):
    if tipo == "montadoras":
        id = int(ULID())
        nome = input("Insira o nome da montadora: ")
        pais = input("Insira o pais da montadora: ")
        ano_fundacao = int(input("Insira o ano de funcacao da montadora: "))

        return [id, nome, pais, ano_fundacao]
    

    if tipo == 'modelosVeiculos':
        id = int(ULID())
        nome = input("Insira o nome do modelo: ")
        montadora_id = foreign_key(dados, "montadoras", "id")
        valor_referencia = int(input("Insira o valor de referencia: "))
        motorizacao = int(input("Insira a motorizacao: "))
        turbo = int(input("O modelo tem turbo? (1- sim) (2- nao)")) == 1
        automatico = int(input("O modelo e automatico? (1- sim) (2- nao)")) == 1

        return [id, nome, montadora_id, valor_referencia, motorizacao, turbo, automatico]
    

    if tipo == 'veiculos':
        id = int(ULID())
        # modelo_id = int(input("Insira o id do modelo: "))
        modelo_id = foreign_key(dados, "modelosVeiculos", "id")
        cor = input("Insira a cor: ")
        ano_fabricacao = int(input("Insira o ano de fabricacao: "))
        ano_modelo = int(input("Insira o ano do modelo: "))
        valor = float(input("Insira o valor do carro: "))
        placa = input("Insira a placa do carro: ")
        vendido = int(input("O carro ja foi vendido? (1- sim) (2- nao)")) == 1

        return [id, modelo_id, cor, ano_fabricacao, ano_modelo, valor, placa, vendido]
    
    else:
        return None
    

def foreign_key(dados, tipo, atributo_buscado):
    list_all = dados[tipo]
    for i in range(len(list_all)):
        print(i+1, dados[tipo][i]['nome'])
    selecao = get_number_in_range(f"Selecione o/a {tipo}: ", 1, len(list_all)+1)
    selecao = int(input(f"Selecione o/a {tipo}: "))

    return dados[tipo][selecao-1][atributo_buscado]


def get_number_in_range(text, min, max):
    number = int(input(text))
    return number if number <= max or number >= min else get_number_in_range(text, min, max)
