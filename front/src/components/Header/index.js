import { Link } from 'react-router-dom'
import './header7.css'
import '../../estilo.index.css'

export default function Header() {

    return (
        <div id="fundo">
            
            <div class='dropdown'>
                <button class='dropbtn'><Link className="mostarda" to='/CadastroU'>Cadastro Usuário</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link className="ketchup" to='/CadastroC'>Cadastro Cliente</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link className="mostarda" to='/CadastroP'>Cadastro Produto</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link className="ketchup" to='/CriarCategoria'>Cadastro Categoria</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link className='mostarda' to='/listausuario'>Listar Usuário</Link></button>
            </div>

            <div class='dropdown'>
               <button class='dropbtn'><Link className='ketchup' to='/listacliente'>Listar Cliente</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link className='mostarda' to='/listaproduto'>Listar Produto</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link className='ketchup' to='/listacategoria'>Listar Categoria</Link></button>
            </div>

        </div>
    )

}