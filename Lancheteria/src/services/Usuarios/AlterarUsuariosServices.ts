import prismaClient from "../../prisma"

interface AlterarUsuarios{
    modificar: string
}

class AlterarUsuariosServices{
    async execute({
      modificar
    }: AlterarUsuarios){
       
    }
}

export {AlterarUsuariosServices}