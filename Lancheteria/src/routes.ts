import { Router } from 'express'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'

const router = Router()

router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/CriarClientes', new CriarClientesController().handle)

export{router}