import prismaClient from '../../prisma'

interface ListarUsuarioUnico{
    id: string
}

class ListarUsuarioUnicoServices{
    async execute({id}: ListarUsuarioUnico){
       console.log(id)
       const retorno = await prismaClient.user.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
              nome: true,
              email: true
            }
        })
        return retorno
    }
}

export {ListarUsuarioUnicoServices}