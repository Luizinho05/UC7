import { Request, Response } from 'express'
import { ListarProdutoUnicoServices } from '../../services/Produtos/ListarProdutoUnicoServices'

class ListarProdutoUnicoController{
    async handle(req: Request, res: Response){
     const { id } = req.params
     const listarProdutoUnicoServices = new ListarProdutoUnicoServices()
     const response = await listarProdutoUnicoServices.execute({
        id
     })
     return res.json(response)
    }
}

export {ListarProdutoUnicoController}