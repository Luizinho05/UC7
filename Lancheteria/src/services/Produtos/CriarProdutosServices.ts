import prismaClient from '../../prisma'

interface CriarProdutos{
   nome:        string
   fabricante:  string
   quantidade:  string
   banner:      string
   preco:       string 
   categoriaId: string
}

class CriarProdutosServices{
    async execute ({
    nome,
    fabricante,
    quantidade,
    banner,
    preco,
    categoriaId
    }: CriarProdutos){
     if (!nome || !fabricante || !quantidade || !banner || !preco || !categoriaId){
        throw new Error('Campos em Branco não são permitidos')
     }
   
     await prismaClient.produtos.create({
        data: {
            nome: nome,
            fabricante: fabricante,
            quantidade: quantidade,
            banner: banner,
            preco: preco,
            categoriaId: categoriaId
        }
    })
       return {dados: 'Produto cadastrado com sucesso!'}
    }
}

export {CriarProdutosServices}