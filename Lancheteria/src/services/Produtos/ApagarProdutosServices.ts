import prismaClient from "../../prisma"

interface ApagarProdutos{
    deletar: string
}

class ApagarProdutosServices{
    async execute({
        deletar
     }: ApagarProdutos){

            await prismaClient.produtos.delete({
                where:{
                    id: deletar
                }
            })
            return {dados: 'Produto apagado com sucesso'}
        }
}

export {ApagarProdutosServices}