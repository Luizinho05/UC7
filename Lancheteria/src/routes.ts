import { Router } from 'express'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController'
import { ListarClientesController } from './controllers/Clientes/ListaClienteController'
import { ListarProdutosController } from './controllers/Produtos/ListarProdutoController'
import { ListarUsuariosController } from './controllers/Usuarios/ListarUsuarioController'

const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CriarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)

//Produtos
router.post('/CriarProdutos', new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)

export{router}