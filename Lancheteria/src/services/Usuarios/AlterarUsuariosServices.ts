import prismaClient from '../../prisma'

interface AlteraUsuario{
    id:          string
    alteraNome:  string
    alteraEmail: string
}

class AlterarUsuarioServices{
    async execute({ id, alteraNome, alteraEmail }: AlteraUsuario){
        
         await prismaClient.user.update({
            where:{
                id: id
            },
            data:{
                nome: alteraNome,
                email: alteraEmail
            }
        })
        return {dados: 'Dados Alterados com sucesso!'}
    }
}

export{AlterarUsuarioServices}