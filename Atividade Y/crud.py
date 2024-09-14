def add(data, atributos, molde_atributos, tipo):
    new_data = {}
    for index in range(len(molde_atributos)):
        new_data[molde_atributos[index]] = atributos[index]
    data[tipo].append(new_data)


def list_all(dados):
    if len(dados) > 0:
        atributos = list(dados[0].keys())
        for i in range(len(dados)):
            for j in range(len(atributos)):
                print(f"""{atributos[j]} = {dados[i][atributos[j]]}""")
            print()

    else:
        print("Vazio")


def list_item(data, tipo, id):
    atributos = list(data[tipo][0].keys())
    for item in data[tipo]:
        if item["id"] == id:
            for j in range(len(atributos)):
                print(f"""{atributos[j]} = {item[atributos[j]]}""")
            print()


def update(data, tipo, id, new_data):
    atributos = list(data[tipo][0].keys())
    for item in data[tipo]:
        if item["id"] == id:
            for index in range(len(new_data)):
                item[atributos[index]] = new_data[index]
    # print("Atualizacao realizada com sucesso!")


def delete(data, tipo, id):
    for item in data[tipo]:
        if item["id"] == id:
            data[tipo].remove(item)


def get_contagem(data, tipo):
    list_all = data[tipo]
    for i in range(len(list_all)):
        print(i+1, data[tipo][i]['nome'])