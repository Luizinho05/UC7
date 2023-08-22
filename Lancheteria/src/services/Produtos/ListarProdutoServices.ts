import prismaClient from "../../prisma"

class ListarProdutosServices{
    async execute(){
        const produto = await prismaClient.produtos.findMany({})
        return (produto)
    }
}

export {ListarProdutosServices}