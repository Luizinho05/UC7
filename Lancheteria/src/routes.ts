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

import { isAutenticado } from './middleware/isAutenticado'
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))//dizendo qual é a pasta

//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/AutenticarUsuario', new AuthLoginController().handle)
router.get('/ListarUsuarios', isAutenticado, new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', isAutenticado, new ListarUsuarioUnicoController().handle)
router.put('/AlterarUsuario', isAutenticado, new AlterarUsuarioController().handle)
router.delete('/ApagarUsuarios', isAutenticado, new ApagarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', isAutenticado, new CriarClientesController().handle)
router.get('/ListarClientes', isAutenticado, new ListarClientesController().handle)
router.get('/ListarClienteUnico/:id', isAutenticado, new ListarClienteUnicoController().handle)
router.put('/AlterarCliente', isAutenticado, new AlterarClienteController().handle)
router.delete('/ApagarClientes', isAutenticado, new ApagarClientesController().handle)

//Produtos
router.post('/CriarProdutos', isAutenticado, upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProdutos',  new ListarProdutosController().handle)
router.get('/ListarProdutoUnico/:id', new ListarProdutoUnicoController().handle)
router.put('/AlterarProduto', new AlterarProdutoController().handle)
router.delete('/ApagarProdutos', new ApagarProdutosController().handle)

//Categorias
router.post('/CriarCategorias', isAutenticado, new CriarCategoriaController().handle)
router.get('/ListarCategorias', isAutenticado, new ListarCategoriasController().handle)

export { router }