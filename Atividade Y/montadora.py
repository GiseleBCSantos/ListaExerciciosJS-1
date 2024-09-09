from crud_montadora import add, list_all, update

montadoras = [('id', 'nome', 'pais', 'ano_fundacao')]

add(montadoras, 'Ford', 'Inglaterra', 1950)
add(montadoras, 'Nissan', 'Japao', 1956)


list_all(montadoras)

update(montadoras)

list_all(montadoras)