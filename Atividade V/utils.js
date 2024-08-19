import {question} from "readline-sync";

export function get_number(text){
    return Number(question(text))
}

export function get_positive_number(text){
    const number = Number(question(text))
    return number > 0 ? number : get_positive_number(text)
}

export function get_negative_number(text){
    const number = Number(question(text))
    return number < 0 ? number : get_negative_number(text)
}

export function get_number_in_range(text, min, max){
    const number = Number(question(text))
    return number >= min && number <= max ? number : get_number_in_range(text)
}

