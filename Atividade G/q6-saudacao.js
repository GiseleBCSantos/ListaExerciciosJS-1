import { question } from "readline-sync";

function main(){
    const turno = question('Insira seu turno (M-matutino | V-vespertino | N-noturno >> ')

    const saudacao = saudacao_por_turno(turno.toUpperCase())

    console.log(`${saudacao}`)
}


function saudacao_por_turno(msg){
    if (msg === 'M'){
        return 'Bom Dia!'
    }
    else if (msg === 'V'){
        return 'Boa Tarde!'
    }
    else if (msg === 'N'){
        return 'Boa Noite!'
    }
    else{
        return 'Valor inválido!'
    }
}

main()