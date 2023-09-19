import { Response, Request } from 'express'
import { AlterarUsuarioServices } from '../../services/Usuarios/AlterarUsuariosServices'

class AlterarUsuarioController{
    async handle(req: Request, res: Response){
          const { id, alteraNome, alteraEmail } = req.body
          const alterarUsuarioServices = new AlterarUsuarioServices()
          const alterar = await alterarUsuarioServices.execute({
              id,
              alteraNome,
              alteraEmail
          })
          return res.json(alterar)
    }  
}

export {AlterarUsuarioController}