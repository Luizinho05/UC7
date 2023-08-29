import { Router } from 'express'
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController'
import { ListarClientesController } from './controllers/Clientes/ListaClienteController'
import { ListarProdutosController } from './controllers/Produtos/ListarProdutoController'
import { ListarUsuariosController } from './controllers/Usuarios/ListarUsuarioController'
import { ApagarUsuariosController } from './controllers/Usuarios/ApagarUsuariosController'
import { ApagarProdutosController } from './controllers/Produtos/ApagarProdutosController'
import { ApagarClientesController } from './controllers/Clientes/ApagarClientesController'


const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)
router.delete('/ApagarUsuarios', new ApagarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CriarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)
router.delete('/ApagarClientes', new ApagarClientesController().handle)

//Produtos
router.post('/CriarProdutos', new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.delete('/ApagarProdutos', new ApagarProdutosController().handle)

export{router}