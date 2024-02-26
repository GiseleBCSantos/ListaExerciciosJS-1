import { question } from "readline-sync";

export function get_number(text){
    return Number(question(text))
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