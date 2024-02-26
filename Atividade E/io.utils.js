import { question } from "readline-sync";

export function get_number(text){
    return Number(question(text))
}

export function get_valid_number(text){
    let number = get_number(text)
    if (number < 1){
        return get_valid_number(text)
    }
    return number

        
}
