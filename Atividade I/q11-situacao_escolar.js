import { get_number_in_range, get_text, get_valid_number } from "../io.utils.js";

function main(){
    let aprovados = 0;
    let reprovados = 0;
    let texto_alunos = '';

    while (true){
        const matricula = get_text('Insira a matrícula do aluno: ')
        if (matricula == 0){
            break
        }
        const nota1 = get_number_in_range(0, 10, `Insira a primeira nota do aluno de matrícula ${matricula}: `)
        const nota2 = get_number_in_range(0, 10, `Insira a segunda nota do aluno de matrícula ${matricula}: `)
        const nota3 = get_number_in_range(0, 10, `Insira a terceira nota do aluno de matrícula ${matricula}: `)

        const media = calcular_media(nota1, nota2, nota3)

        texto_alunos += `Matricula ${matricula} --> Média: ${media} --> Situação: ${media >= 7 ? 'Aprovado' : 'Reprovado'}\n`

        media >= 7 ? aprovados+=1 : reprovados+=1

    }

    let total_alunos = aprovados + reprovados

    let texto_aprovados = aprovados == 1 ? 'foi aprovado' : 'foram aprovados'
    let texto_reprovados = aprovados == 1 ? 'foi reprovado' : 'foram reprovados'

    console.log(texto_alunos)

    console.log(`Na turma havia ${total_alunos} alunos, ${aprovados} ${texto_aprovados} e ${reprovados} ${texto_reprovados}.`)
}


function calcular_media(nota1, nota2, nota3){
    return ((2*nota1) + (3*nota2) + (5*nota3))/10
}

main()