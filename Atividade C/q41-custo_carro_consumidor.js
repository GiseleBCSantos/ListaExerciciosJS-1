import { question } from "readline-sync";

let custo_fabrica = Number(question("Insira o custo de fabrica de um carro: "))

let percentagem_distribuidor = (custo_fabrica * 0.28)
let impostos = (custo_fabrica * 0.45)

let custo_consumidor = (custo_fabrica + percentagem_distribuidor + impostos)

console.log(`
Informações sobre um carro que tem como custo de fábrica R$ ${custo_fabrica}:
> Percentagem do distribuidor: R$ ${percentagem_distribuidor.toFixed(2)}
> Impostos: R$ ${impostos.toFixed(2)}

> Custo total para o consumidor: R$ ${custo_consumidor.toFixed(2)}.`)