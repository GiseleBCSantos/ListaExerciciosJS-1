import { question } from "readline-sync";

let valor_desejado = Number(question("Insira o valor que deseja sacar: "))
let dinheiro_total = valor_desejado;
let notas_50 = 0;
let notas_10 = 0;
let notas_5 = 0;
let notas_1 = 0;

while (dinheiro_total >= 1){
    if (dinheiro_total >= 50) {
        notas_50 += 1
        dinheiro_total -= 50      
    }
    else if (dinheiro_total >= 10){
        notas_10 += 1
        dinheiro_total -= 10
    }
    else if (dinheiro_total >= 5){
        notas_5 += 1
        dinheiro_total -= 5
    }
    else if (dinheiro_total >= 1){
        notas_1 += 1
        dinheiro_total -= 1
    }
}

console.log(`
Valor sacado: R$ ${valor_desejado}
>> Notas de 50: ${notas_50}
>> Notas de 10: ${notas_10}
>> Notas de 5: ${notas_5}
>> Notas de 1: ${notas_1}
`)