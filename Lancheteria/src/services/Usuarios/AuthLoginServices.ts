import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import prismaClient from '../../prisma'

interface AutenticarUsuario {
  email:    string
  password: string
}

class AuthLoginServices {
  async execute({ email, password }: AutenticarUsuario) {


    const usuario = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
    if (!usuario) {
      throw new Error('Usuário/Senha incorreta')
    }

    const autenticado = await compare(password, usuario.senha)
    if (!autenticado) {
      throw new Error('Usuário/Senha incorreta')
    }

    const token = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SEGREDO,
      {
        subject: usuario.id,
        expiresIn: '1h'
      }
    )
    return {
      id: usuario.id,
      email: usuario.email,
      token: token
    }

  }
}

export { AuthLoginServices }