import { Router } from 'express'

//Criar
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController'

//Listar
import { ListarClientesController } from './controllers/Clientes/ListaClienteController'
import { ListarProdutosController } from './controllers/Produtos/ListarProdutoController'
import { ListarUsuariosController } from './controllers/Usuarios/ListarUsuarioController'

//Listar único
import { ListarUsuarioUnicoController } from './controllers/Usuarios/ListarUsuarioUnicoController'
import { ListarClienteUnicoController } from './controllers/Clientes/ListarClienteUnicoController'
import { ListarProdutoUnicoController } from './controllers/Produtos/ListarProdutoUnicoController'

//Apagar
import { ApagarUsuariosController } from './controllers/Usuarios/ApagarUsuariosController'
import { ApagarProdutosController } from './controllers/Produtos/ApagarProdutosController'
import { ApagarClientesController } from './controllers/Clientes/ApagarClientesController'


const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', new ListarUsuarioUnicoController().handle)
router.delete('/ApagarUsuarios', new ApagarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CriarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)
router.get('/ListarClienteUnico/:id', new ListarClienteUnicoController().handle)
router.delete('/ApagarClientes', new ApagarClientesController().handle)

//Produtos
router.post('/CriarProdutos', new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarProdutoUnico/:id', new ListarProdutoUnicoController().handle)
router.delete('/ApagarProdutos', new ApagarProdutosController().handle)

export{router}