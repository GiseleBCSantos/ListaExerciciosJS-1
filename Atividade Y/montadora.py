# from crud_montadora import add, list_all, update
from crud import add, list_all, update, delete, list_item

data = {
    "montadoras": [],
    "modelosVeiculos":[],
    "veiculos": []
}
dados_montadoras = ('id', 'nome', 'pais', 'ano_fundacao')
dados_modelosVeiculos = ("id", "nome", "montadora_id", "valor_referencia", "motorizacao", "turbo", "automatico")
dados_veiculos = ("id", "modelo_id", "cor", "ano_fabricacao", "ano_modelo", "valor", "placa", "vendido")

add(data, [1, "Ford", "England", 1950], dados_montadoras, "montadoras")
add(data, [2, 'Nissan', 'Japao', 1956], dados_montadoras, "montadoras")

add(data, [1, "nome1", 1, 500, 100, True, True], dados_modelosVeiculos, "modelosVeiculos")
add(data, [2, "nome2", 2, 500, 100, True, True], dados_modelosVeiculos, "modelosVeiculos")

add(data, [1, 1, "branco", 1994, 1990, 100_000, "kfjskfjd", False], dados_veiculos, "veiculos")
add(data, [2, 1, "preto", 1994, 1990, 100_000, "kfjskfkd", True], dados_veiculos, "veiculos")

# list_all(data, "montadoras")
# list_all(data, "modelosVeiculos")
# list_all(data, "veiculos")
list_item(data, "montadoras", 1)

update(data, "montadoras", 1, [1, "Ford", "England", 2000])
# list_all(data, "montadoras")

# update(data, "veiculos", 2, [2, 1, "vermelho", 1994, 1990, 100_000, "kfjskfkd", True])
# delete(data, "veiculos", 1)
# delete(data, "veiculos", 2)
# list_all(data, "veiculos")
list_item(data, "montadoras", 1)

# add(montadoras, 'Ford', 'Inglaterra', 1950)
# add(montadoras, 'Nissan', 'Japao', 1956)


# list_all(montadoras)

# update(montadoras)

# list_all(montadoras)