import { Router } from 'express'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'

const router = Router()

router.post('/CriarUsuarios', new CriarUsuarioController().handle)


export{router}