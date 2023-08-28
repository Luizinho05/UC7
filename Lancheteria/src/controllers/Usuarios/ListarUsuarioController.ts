import { Request, Response } from 'express'
import { ListarUsuariosServices } from '../../services/Usuarios/ListarUsuarioServices'

class ListarUsuariosController{
    async handle(req: Request, res: Response){
        const listarUsuarioServices = new ListarUsuariosServices()
        const usuarios = await listarUsuarioServices.execute()
        return res.json(usuarios)
    }
}

export {ListarUsuariosController}