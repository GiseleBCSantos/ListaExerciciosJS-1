import { get_number } from "./io.utils.js";


function main(){
    const numero1 = get_number('Insira o numero 1: ')
    const numero2 = get_number('Insira o numero 2: ')
    const numero3 = get_number('Insira o numero 3: ')
    const numero4 = get_number('Insira o numero 4: ')
    const numero5 = get_number('Insira o numero 5: ')

    const maior_num = maior_numero(numero1, numero2, numero3, numero4, numero5)
    const menor_num = menor_numero(numero1, numero2, numero3, numero4, numero5)

    console.log(`Maior número: ${maior_num} \nMenor número: ${menor_num}`)

}



function maior_numero(n1, n2, n3, n4, n5){
    if (n1>n2 && n1>n3 && n1>n4 && n1>n5){
        return n1
    }
    else if (n2>n1 && n2>n3 && n2>n4 && n2>n5){
        return n2
    }
    else if (n3>n1 && n3>n2 && n3>n4 && n3>n5){
        return n3
    }
    else if (n4>n1 && n4>n2 && n4>n3 && n4>n5){
        return n4
    }
    else{
        return n5
    }
}


function menor_numero(n1, n2, n3, n4, n5){
    if (n1<n2 && n1<n3 && n1<n4 && n1<n5){
        return n1
    }
    else if (n2<n1 && n2<n3 && n2<n4 && n2<n5){
        return n2
    }
    else if (n3<n1 && n3<n2 && n3<n4 && n3<n5){
        return n3
    }
    else if (n4<n1 && n4<n2 && n4<n3 && n4<n5){
        return n4
    }
    else{
        return n5
    }
}

main()