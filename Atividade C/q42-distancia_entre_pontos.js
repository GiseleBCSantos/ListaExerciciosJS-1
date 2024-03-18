import { question } from "readline-sync";

let ponto1_x = Number(question('Insira a coordenada x do ponto 1 no plano: '))
let ponto1_y = Number(question('Insira a coordenada y do ponto 1 no plano: '))

let ponto2_x = Number(question('Insira a coordenada x do ponto 2 no plano: '))
let ponto2_y = Number(question('Insira a coordenada y do ponto 2 no plano: '))

let distancia_entre_pontos = ( (ponto2_x - ponto1_x)**2 + (ponto2_y - ponto1_y)**2 )**(0.5)


console.log(`A distancia entre o ponto (${ponto1_x}, ${ponto1_y}) e (${ponto2_x}, ${ponto2_y}) é de ${distancia_entre_pontos.toFixed(2)}.`)