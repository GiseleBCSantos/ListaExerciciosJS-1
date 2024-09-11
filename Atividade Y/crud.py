

def add(data, atributos, molde_atributos, tipo):
    new_data = {}
    for index in range(len(molde_atributos)):
        new_data[molde_atributos[index]] = atributos[index]
    data[tipo].append(new_data)


def list_all(data, tipo):
    print(f"*** {tipo} ***")
    if len(list(data[tipo])) > 0:
        atributos = list(data[tipo][0].keys())
        for i in range(len(data[tipo])):
            for j in range(len(atributos)):
                print(f"""{atributos[j]} = {data[tipo][i][atributos[j]]}""")
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