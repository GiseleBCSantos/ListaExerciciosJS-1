import { get_text, get_valid_number } from "../io.utils.js";

function main(){
    let aprovados = 0;
    let reprovados = 0;

    while (true){
        const matricula = get_text('Insira a matrícula do aluno: ')
        if (matricula == 0){
            break
        }
        const nota1 = get_valid_number(`Insira a primeira nota do aluno de matrícula ${matricula}: `)
        const nota2 = get_valid_number(`Insira a segunda nota do aluno de matrícula ${matricula}: `)
        const nota3 = get_valid_number(`Insira a terceira nota do aluno de matrícula ${matricula}: `)

        const media = calcular_media(nota1, nota2, nota3)

        if (media >= 7){
            aprovados += 1
        }
        else{
            reprovados += 1
        }
    }

    let total_alunos = aprovados + reprovados

    console.log(`Na turma havia ${total_alunos} alunos. ${aprovados} foram aprovados e ${reprovados} foram reprovados.`)
}


function calcular_media(nota1, nota2, nota3){
    return ((2*nota1) + (3*nota2) + (5*nota3))/10
}

main()