import { Router } from 'express'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { ListarClientesController } from './controllers/Clientes/ListaClienteController'

const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle)

//Clientes
router.post('/CriarClientes', new CriarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)

export{router}