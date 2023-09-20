import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'

interface AutenticarUsuario{
    email:    string
    password: string
}

class AuthLoginServices{
    async execute({ email, password}:AutenticarUsuario){
     
      
      const usuario = await prismaClient.user.findFirst({
        where:{
          email: email
        }
      })
      if(!usuario){
        throw new Error('Usuário/Senha incorreta')
      }

      const autenticado = await compare(password, usuario.senha)
      if(!autenticado){
       throw new Error('Usuário/Senha incorreta')
      }

      return ({dados: 'O usuário foi autenticado!'})

    }
}

export {AuthLoginServices}