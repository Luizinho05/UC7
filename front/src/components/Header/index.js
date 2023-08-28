import { Link } from 'react-router-dom'
import './header7.css'
import '../../estilo.index.css'

export default function Header() {

    return (
        <div id="fundo">
            
          <div class='dropdown'>
            <button class='dropbtn'><Link class="pagina" to='/LoginU'>Login</Link></button>
          </div>
 
                <div class='dropdown'>
                   <button class='dropbtn'><Link class="pagina" to='/CadastroU'>Cadastro Usuário</Link></button>
                </div>

            <div class="dropdown">
                <button class="dropbtn"><Link class="pagina" to='/CadastroC'>Cadastro Clientes</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link class="pagina" to='/CadastroP'>Cadastro Produtos</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link class='pagina' to='/listacliente'>Listar Clientes</Link></button>
            </div>

            <div class='dropdown'>
               <button class='dropbtn'><Link class='pagina' to='/listaproduto'>Listar Produtos</Link></button>
            </div>

            <div class='dropdown'>
                <button class='dropbtn'><Link class='pagina' to='/listausuario'>Listar Usuários</Link></button>
            </div>

        </div>
    )

}