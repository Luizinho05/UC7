import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CriarUsuario{
    nome: string
    email: string
    senha: string
}

class CriarUsuarioServices{
    async execute ({nome, email, senha}: CriarUsuario){
        if(!nome || !email || !senha){
            throw new Error('Campos em Branco não são Permitidos')
        }
        const emailJaCadastrado = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if (emailJaCadastrado){
            throw new Error('Esse Email já está Cadastrado')
        }

        const senhaCrypt = await hash(senha, 8)
        const usuario = await prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return {dados: usuario}
    }
}

export {CriarUsuarioServices}