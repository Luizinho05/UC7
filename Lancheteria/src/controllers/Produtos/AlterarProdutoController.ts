import { Request, Response } from 'express'
import { AlterarProdutoServices } from '../../services/Produtos/AlterarProdutoServices'

class AlterarProdutoController{
    async handle(req: Request, res: Response){
    const {id, alteraQuantidade, alteraPreco} = req.body
    const alterarProdutoServices = new AlterarProdutoServices()
    const alteraProduto = await alterarProdutoServices.execute({
        id,
        alteraQuantidade,
        alteraPreco
    })
    return res.json(alteraProduto)
    }
}

export {AlterarProdutoController}