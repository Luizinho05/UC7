import { Request, Response } from 'express'
import { AlterarClienteServices } from '../../services/Clientes/AlterarClientesServices'

class AlterarClienteController{
    async handle(req: Request, res:Response){
    const {id, alteraCelular, alteraRua, alteraComplemento, alteraBairro, alteraCidade, alteraEstado, alteraPais} = req.body
         const alterarClienteServices = new AlterarClienteServices()
         const alteraCliente = await alterarClienteServices.execute({
            id,
            alteraCelular,
            alteraRua,
            alteraComplemento,
            alteraBairro,
            alteraCidade,
            alteraEstado,
            alteraPais
         })
         return res.json(alteraCliente)
    }
}

export {AlterarClienteController}