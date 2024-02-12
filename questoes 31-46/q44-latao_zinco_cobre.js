import { question } from "readline-sync";

let quantidade_kg_inserida = Number(question("Insira uma quantidade em kg de latao desejada: "))

let quantidade_cobre = quantidade_kg_inserida * 0.7
let quantidade_zinco = quantidade_kg_inserida * 0.3

console.log(`
Para obter ${quantidade_kg_inserida} kg de latão é necessário:
>> ${quantidade_cobre.toFixed(2)} kg de cobre
>> ${quantidade_zinco.toFixed(2)} kg de zinco`)