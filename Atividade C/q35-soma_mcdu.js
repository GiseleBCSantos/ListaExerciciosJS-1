import { question } from "readline-sync";

let numeroInserido = Number(question('Insira um numero de 4 digitos: '));

let milhar = Math.floor( numeroInserido / 1000);
let resto_milhar = numeroInserido % 1000;

let centena = Math.floor( resto_milhar / 100 );
let resto_centena = resto_milhar % 100;

let dezena = Math.floor(resto_centena / 10 );

let unidade = resto_centena % 10;

let soma_mcdu = milhar + centena + dezena + unidade;

console.log(`
Número inserido >> ${numeroInserido} <<
${milhar} + ${centena} + ${dezena} + ${unidade}
>>>> ${soma_mcdu} <<<<`)