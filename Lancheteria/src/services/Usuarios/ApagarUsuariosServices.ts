import prismaClient from '../../prisma'

interface ApagarUsuarios{
   remove: string
}

class ApagarUsuariosServices{
    async execute({
        remove
       }: ApagarUsuarios){
      
        await prismaClient.user.delete({
            where:{
                id: remove
            }
        })
        return {dados: 'Registro apagado com Sucesso'}
    }
}

export {ApagarUsuariosServices}