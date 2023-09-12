import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Inicio/index'
import LoginU from './Usuarios/LoginU'
import CadastroU from './Usuarios/CadastroU'
import ProdutosCadastro from './Produtos/CadastroP'
import ClienteCadastro from './Clientes/CadastroC'
import ListarClientes from './dashboard/listacliente'
import ListarProdutos from './dashboard/listaproduto'
import ListarUsuarios from './dashboard/listausuario'
import AlterarUsuario from './Usuarios/AlterarU'

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
            <Route path='/AlterarU' element={ <AlterarUsuario /> } />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}