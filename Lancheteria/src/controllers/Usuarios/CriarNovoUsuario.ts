import { Request, Response } from 'express'

class CriarNovoUsuarioController{
    async handle(req:Request, res: Response){
        const { nome, celular, celFixo, rua, complemento, bairro, cidade, estado } = req.body
        console.log(nome, celular, celFixo, rua, complemento, bairro, cidade, estado)
    }
}

export{CriarNovoUsuarioController}