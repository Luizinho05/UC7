import { Request, Response } from 'express'
import { AuthLoginServices } from '../../services/Usuarios/AuthLoginServices'

class AuthLoginController{
    async handle(req: Request, res: Response){
        const {  email, password } = req.body
        
        const autenticarUsuarioServices = new AuthLoginServices()
        const autentico = await autenticarUsuarioServices.execute({
            email,
            password
        })
        return res.json(autentico)
    }
}

export {AuthLoginController}