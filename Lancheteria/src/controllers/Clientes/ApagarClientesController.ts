import { Request, Response } from 'express'
import { ApagarClientesServices } from '../../services/Clientes/ApagarClientesServices'

class ApagarClientesController{
    async handle (req: Request, res: Response){
        const { excluir } = req.body
        const apagarClientesServices = new ApagarClientesServices()
        const apagar = await apagarClientesServices.execute({
            excluir
        })
        return res.json (apagar)
    }
}

export {ApagarClientesController}