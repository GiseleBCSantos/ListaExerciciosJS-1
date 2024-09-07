import { carregar_arquivo, get_number_in_range, print } from "./utils.js"

export const mostrar_menu_inicial = () => {
    console.clear()
    console.log(`
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
`)
}

export const  mostrar_menu_iniciar_vetor = () => {
    console.log(`
1) Usar um vetor gerado aleatoriamente
2) Carregar valores de um arquivo 
`)
}


export const criar_vetor = () => {
    const resposta_iniciar_vetor = get_number_in_range(1,2,">> ")
    let vetor = []

    if (resposta_iniciar_vetor == 1){
        const tamanho = get_positive_number("Insira o tamanho do seu vetor: ")
        const min = get_number("Insira o valor minimo: ")
        const max = get_number("Insira o valor maximo: ")
        vetor = criar_vetor_aleatorio(tamanho, min, max)
    }
    if (resposta_iniciar_vetor == 2){
            
        vetor = obter_vetor_de_arquivo("numeros.txt")
        
        
    }
}


const obter_vetor_de_arquivo = (nome_arquivo) => {
    let numeros = carregar_arquivo(nome_arquivo);
    numeros = numeros.split(" ")
    let vetor = []

    for (let element of numeros){
        vetor.push(element.replace("\n", ""))
    }

    print(vetor)
}