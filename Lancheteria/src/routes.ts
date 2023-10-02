import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Criar
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController'
import { CriarCategoriaController } from './controllers/Categorias/CriarCategoriasController'

//Listar
import { ListarClientesController } from './controllers/Clientes/ListaClienteController'
import { ListarProdutosController } from './controllers/Produtos/ListarProdutoController'
import { ListarUsuariosController } from './controllers/Usuarios/ListarUsuarioController'
import { ListarCategoriasController } from './controllers/Categorias/ListarCategoriasController'

//Listar único
import { ListarUsuarioUnicoController } from './controllers/Usuarios/ListarUsuarioUnicoController'
import { ListarClienteUnicoController } from './controllers/Clientes/ListarClienteUnicoController'
import { ListarProdutoUnicoController } from './controllers/Produtos/ListarProdutoUnicoController'

//Apagar
import { ApagarUsuariosController } from './controllers/Usuarios/ApagarUsuariosController'
import { ApagarProdutosController } from './controllers/Produtos/ApagarProdutosController'
import { ApagarClientesController } from './controllers/Clientes/ApagarClientesController'

//Alterar
import { AlterarClienteController } from './controllers/Clientes/AlterarClientesController'
import { AlterarUsuarioController } from './controllers/Usuarios/AlterarUsuarioController'
import { AlterarProdutoController } from './controllers/Produtos/AlterarProdutoController'

//Autenticar
import { AuthLoginController } from './controllers/Usuarios/AuthLoginController'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))//dizendo qual é a pasta

//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/AutenticarUsuario', new AuthLoginController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', new ListarUsuarioUnicoController().handle)
router.put('/AlterarUsuario', new AlterarUsuarioController().handle)
router.delete('/ApagarUsuarios', new ApagarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CriarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)
router.get('/ListarClienteUnico/:id', new ListarClienteUnicoController().handle)
router.put('/AlterarCliente', new AlterarClienteController().handle)
router.delete('/ApagarClientes', new ApagarClientesController().handle)

//Produtos
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarProdutoUnico/:id', new ListarProdutoUnicoController().handle)
router.put('/AlterarProduto', new AlterarProdutoController().handle)
router.delete('/ApagarProdutos', new ApagarProdutosController().handle)

//Categorias
router.post('/CriarCategorias', new CriarCategoriaController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)

export{router}