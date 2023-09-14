import { Request, Response } from 'express'
import { ListarClienteUnicoServices } from '../../services/Clientes/ListarClienteUnicoServices'

class ListarClienteUnicoController{
    async handle (req: Request, res: Response){
        const { id } = req.params
        const listarClienteUnicoServices = new ListarClienteUnicoServices()
        const EnviadaResposta = await listarClienteUnicoServices.execute({
            id
        })
        return res.json(EnviadaResposta)
    }
}

export {ListarClienteUnicoController}