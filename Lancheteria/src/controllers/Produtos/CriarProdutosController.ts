import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../services/Produtos/CriarProdutosServices'

//req é solicitação
//res é resposta

class CriarProdutosController {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, quantidade, preco, categoriaId } = req.body

        if (!req.file) {
            throw new Error('Imagem com problemas!')
        } else {

            const { originalname, filename: banner } = req.file
            const criarProdutosServices = new CriarProdutosServices()
            const produtos = await criarProdutosServices.execute({
                nome,
                fabricante,
                quantidade,
                banner,
                preco,
                categoriaId
            })
            return res.json(produtos)

        }
    }
}

export { CriarProdutosController }