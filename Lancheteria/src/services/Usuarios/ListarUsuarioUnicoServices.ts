import prismaClient from '../../prisma'

interface ListarUsuarioUnico{
    id: string
}

class ListarUsuarioUnicoServices{
    async execute({id}: ListarUsuarioUnico){
       
       const resposta = await prismaClient.user.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
              nome: true,
              email: true
            }
        })
        return resposta
    }
}

export {ListarUsuarioUnicoServices}