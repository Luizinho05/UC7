import { Request, Response } from 'express'
import { CriarClientesServices } from '../../services/Clientes/CriarClientesServices'

class CriarClientesController{
     async handle(req: Request, res: Response ){
        const { nome, cpf_cnpj , rg_ie , celular, celularFixo, rua,
        complemento, bairro, cidade, estado, pais } = req.body

        const criarClientesServices = new CriarClientesServices()
        const clientes = await criarClientesServices.execute({
          nome,
          cpf_cnpj,
          rg_ie,
          celular,
          celularFixo,
          rua,
          complemento,
          bairro,
          cidade,
          estado,
          pais
        })
        return res.json(clientes)
     }
}

export {CriarClientesController}