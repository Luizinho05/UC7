import prismaClient from '../../prisma'

interface ListarProdutoUnico{
    id: string
}

class ListarProdutoUnicoServices{
    async execute ({id}: ListarProdutoUnico){
        
    const response = await prismaClient.produtos.findUnique({
        where:{
            id: id
        },
        select:{
            id: true,
            quantidade: true,
            preco: true
        }
    })
    return response
    }
}

export {ListarProdutoUnicoServices}