import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Inicio/index'
import LoginU from './Usuarios/LoginU'
import CadastroU from './Usuarios/CadastroU'
import ProdutosCadastro from './Produtos/CadastroP'
import ClienteCadastro from './Clientes/CadastroC'
import ListarClientes from './Clientes/ListarC/listacliente'
import ListarProdutos from './Produtos/ListarP/listaproduto'
import ListarUsuarios from './Usuarios/ListarU/listausuario'
import AlterarUsuario from './Usuarios/AlterarU'
import AlterarCliente from './Clientes/AlterarC'
import AlterarProduto from './Produtos/AlterarP'
import Dashboard from './dashboard/dashboard'

export default function Rotas(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/LoginU' element={ <LoginU /> } />
            <Route path='/CadastroU' element={ <CadastroU /> } />
            <Route path='/CadastroP' element={ <ProdutosCadastro /> } />
            <Route path='/CadastroC' element={ <ClienteCadastro /> } />
            <Route path='/listacliente' element={ <ListarClientes /> } />
            <Route path='/listaproduto' element={ <ListarProdutos /> } />
            <Route path='/listausuario' element={ <ListarUsuarios /> } />
            <Route path='/AlterarU/:id' element={ <AlterarUsuario /> } />
            <Route path='/AlterarC/:id' element={ <AlterarCliente /> } />
            <Route path='/AlterarP/:id' element={ <AlterarProduto /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}