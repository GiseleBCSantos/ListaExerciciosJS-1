import { get_number } from "./io.utils.js";

function main(){
    console.log('**** Insira a senha para entrar no sistema ****')
    const senha_inserida = get_number('Senha: ')

    const senha_conferida = validar_senha(senha_inserida)

    console.log(`${senha_conferida}`)
}


function validar_senha(senha){
    if (senha === 1234){
        return 'Acesso autorizado!'
    }
    else{
        return 'Acesso negado!'
    }
}

main()