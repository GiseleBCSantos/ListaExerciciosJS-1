import { question } from "readline-sync";

export function get_number(text){
    return Number(question(text))
}

export function get_number_in_range(min, max, text){
    let number = Number(question(text))
    if (number >= min && number <= max){
        return number
    }
    return get_number_in_range(min, max, text)
}

export function get_text(text){
    return question(text)
}

export function get_valid_number(text){
    let number = get_number(text)
    if (number < 0){
        return get_valid_number(text)
    }
    return number   
}


export function get_integer_number(text){
    let number = get_number(text)
    if (number % 1 === 0){
        return number
    }
    return get_integer_number(text)
}

export function eh_par(number){
    if (number % 2 === 0){
        return 'é par'
    }
    return 'é ímpar'
}

export function validar_data(dia, mes, ano){
    if (dia > 31 || mes > 12){
        return false
    }
    else if (dia > 30 && (mes === 4 || mes === 6 || mes === 9 || mes === 11)){
        return false
    }
    else if (mes === 2 && dia > 29){
        return false
    }
    else if (mes === 2 && dia > 28 && ano % 4 !== 0){
        return false
    }

    return true
}

export function print(text){
    console.log(text)
}

export function menor_numero(n1, n2){
    return n1 > n2 ? n2 : n1
}

export function maior_numero(n1, n2){
    return n1 > n2 ? n1 : n2
}

export function eh_vogal(letra){
    let intervalo = /[aeiou]/
    return intervalo.test(letra)
}

export function eh_consoante(letra){
    let intervalo = /[a-z]/
    return intervalo.test(letra) && ! eh_vogal(letra)
}

export function deleteFirstElement(frase){
    return frase.slice(1)
}

export function get_random_in_range(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}