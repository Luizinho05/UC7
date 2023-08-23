import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './home/Inicio'
import LoginU from './Usuarios/LoginU'
import CadastroU from './Usuarios/CadastroU'
import ProdutosCadastro from './Produtos/CadastroP'
import ClienteCadastro from './Clientes/CadastroC'


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
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}