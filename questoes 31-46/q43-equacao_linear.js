import { question } from "readline-sync";

let coeficiente_a = Number(question('Insira um valor para o coeficiente a: '))
let coeficiente_b = Number(question('Insira um valor para o coeficiente b: '))
let coeficiente_c = Number(question('Insira um valor para o coeficiente c: '))
let coeficiente_d = Number(question('Insira um valor para o coeficiente d: '))
let coeficiente_e = Number(question('Insira um valor para o coeficiente e: '))
let coeficiente_f = Number(question('Insira um valor para o coeficiente f: '))

let valor_x = (coeficiente_c*coeficiente_e - coeficiente_b*coeficiente_f) / (coeficiente_a*coeficiente_e - coeficiente_b*coeficiente_d)
let valor_y = (coeficiente_a*coeficiente_f - coeficiente_c*coeficiente_d) / (coeficiente_a*coeficiente_e - coeficiente_b*coeficiente_d)

console.log(`
Para os valores:
> a = ${coeficiente_a}
> b = ${coeficiente_b}
> c = ${coeficiente_c}
> d = ${coeficiente_d}
> e = ${coeficiente_e}
> f = ${coeficiente_f}

Temos que:
>> x = ${valor_x}
>> y = ${valor_y}
`)