import prismaClient from '../../prisma'

interface ListarClienteUnico{
    id: string
}

class ListarClienteUnicoServices{
    async execute({id}: ListarClienteUnico){
        
        const RespostaEnviada = await prismaClient.clientes.findUnique({
            where:{
                id: id
            },
            select:{
                id: true,
                rua: true,
                complemento: true,
                bairro: true,
                cidade: true,
                estado: true,
                pais: true,
                celular: true
            }
        })
        return RespostaEnviada
        }
}

export {ListarClienteUnicoServices}