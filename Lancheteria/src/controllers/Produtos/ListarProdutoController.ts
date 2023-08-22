import { Request, Response } from "express"
import { ListarProdutosServices } from "../../services/Produtos/ListarProdutoServices"

class ListarProdutosController{
    async handle(req: Request, res: Response){

        const listarProdutosServices = new ListarProdutosServices()
        const produto = await listarProdutosServices.execute()
        return res.json(produto)
    }
}

export {ListarProdutosController}