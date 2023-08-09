
interface CriarUsuario{
    nome: string
    email: string
    senha: string
}

class CriarUsuarioServices{
    async execute ({nome, email, senha}: CriarUsuario){
        console.log(nome, email, senha)

    }
}

export {CriarUsuarioServices}