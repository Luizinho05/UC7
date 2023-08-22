import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../services/Produtos/CriarProdutosServices'

class CriarProdutosController{
    async handle (req: Request, res: Response){
        const { nome, fabricante, quantidade, preco } = req.body

        const criarProdutosServices = new CriarProdutosServices()
        const produtos = await criarProdutosServices.execute({
           nome,
           fabricante,
           quantidade,
           preco
        })
        return res.json(produtos)
    }
}

export {CriarProdutosController}