import prismaClient from '../../prisma'

interface AlteraProduto{
    id:               string 
    alteraQuantidade: string
    alteraPreco:      string
}

class AlterarProdutoServices{
    async execute({id, alteraQuantidade, alteraPreco}: AlteraProduto){
        await prismaClient.produtos.update({
            where:{
                id: id
            },
            data:{
                quantidade: alteraQuantidade,
                preco: alteraPreco
            }
        }) 
        return {dados: 'Dados Alterados com sucesso!'}
    }
}

export {AlterarProdutoServices}