import { Link } from 'react-router-dom'
import './header7.css'
import '../../estilo.index.css'

export default function Header() {

    return (
        <div id="fundo">
            
          <div class='dropdown'>
            <button class='dropbtn'><Link class="ketchup" to='/LoginU'>Login</Link></button>
          </div>
 
            <div class='dropdown'>
                <button class='dropbtn'><Link class="mostarda" to='/CadastroU'>Cadastro Usuário</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link class="ketchup" to='/CadastroC'>Cadastro Cliente</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link class="mostarda" to='/CadastroP'>Cadastro Produto</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link class='ketchup' to='/listausuario'>Listar Usuário</Link></button>
            </div>

            <div class='dropdown'>
               <button class='dropbtn'><Link class='mostarda' to='/listacliente'>Listar Cliente</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link class='ketchup' to='/listaproduto'>Listar Produto</Link></button>
            </div>

        </div>
    )

}