import { Router } from 'express'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarNovoUsuarioController } from './controllers/Usuarios/CriarNovoUsuario'

const router = Router()

router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/CriarUsuarioNovo', new CriarNovoUsuarioController().handle)




export{router}