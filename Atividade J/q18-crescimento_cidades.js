function main(){

    let habitantes_cidade_a = 200000
    const crescimento_cidade_a = 3.5
    let habitantes_cidade_b = 800000
    const crescimento_cidade_b = 1.35

    let anos_para_superar_populacao = calcular_anos_para_superar_populacao(habitantes_cidade_a, crescimento_cidade_a, habitantes_cidade_b, crescimento_cidade_b)

    console.log(`
    Uma cidade com ${habitantes_cidade_a} habitantes e taxa de crescimento de ${crescimento_cidade_a}% ao ano superará a população de uma cidade com ${habitantes_cidade_b} habitantes e taxa de crescimento de ${crescimento_cidade_b}% ao ano em ${anos_para_superar_populacao} anos.`)

}

function calcular_anos_para_superar_populacao(cidade1, crescim_cidade1, cidade2, crescim_cidade2){
    let cidade_maior = cidade1 > cidade2 ? cidade1 : cidade2
    let crescim_maior_cid = cidade1 > cidade2 ? crescim_cidade1 : crescim_cidade2
    let cidade_menor = cidade1 < cidade2 ? cidade1 : cidade2
    let crescim_menor_cid = cidade1 < cidade2 ? crescim_cidade1 : crescim_cidade2
    let anos = 0
    
    while (cidade_menor <= cidade_maior){
        cidade_maior *= crescim_maior_cid/100 + 1
        cidade_menor *= crescim_menor_cid/100 + 1
        anos++
    }
    return anos
}

main()