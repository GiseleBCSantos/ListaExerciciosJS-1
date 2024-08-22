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
    return number >= min && number <= max ? number : get_number_in_range(text, min, max)
}

export function get_random_in_range(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function show_loading(text_before, text_after){
    console.log(text_before)
    await sleep(1000)
    console.log(text_after)
    await sleep(500)
}

export function press_enter_to_continue(){
    let _ = question()
}