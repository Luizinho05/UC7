import prismaClient from "../../prisma"

interface ApagarCliente{
    excluir: string
}

class ApagarClientesServices{
    async execute({
        excluir
    }:ApagarCliente){

        await prismaClient.clientes.delete({
            where:{
                id: excluir
            }
        })
        return {dados: 'Dados apagados com sucesso'}
    }
}

export {ApagarClientesServices}