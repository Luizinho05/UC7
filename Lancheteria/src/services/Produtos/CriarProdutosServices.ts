import prismaClient from '../../prisma'

interface CriarProdutos{
   nome:       string
   fabricante: string
   quantidade: string
   preco:      string 
}

class CriarProdutosServices{
    async execute ({
    nome,
    fabricante,
    quantidade,
    preco
    }: CriarProdutos){
     if (!nome || !fabricante || !quantidade || !preco){
        throw new Error('Campos em Branco não são permitidos')
     }
   
    const produto = await prismaClient.produtos.create({
        data: {
            nome: nome,
            fabricante: fabricante,
            quantidade: quantidade,
            preco: preco
        },
        select: {
            nome: true,
            quantidade: true,
            preco: true
        }
    })
       return {dados: produto}
    }
}

export {CriarProdutosServices}