import { Link } from 'react-router-dom'
import banner from '../../fotos/lancheteria.png'
import './header7.css'
import '../../estilo.index.css'

export default function Header() {

    return (
        <div id="fundo">
            
            <Link className='logo' to='/'><img id="banner" src={banner} alt="banner"></img></Link>
            
            <h2 class="nomeLoja">Lancheteria</h2>

          <div class='dropdown'>
            <button class='dropbtn'><Link class="pagina" to='/LoginU'>Login de Usuário</Link></button>
          </div>
 
                <div class='dropdown'>
                   <button class='dropbtn'><Link class="pagina" to='/CadastroU'>Cadastro de Usuário</Link></button>
                </div>

            <div class="dropdown">
                <button class="dropbtn"><Link class="paginas" to='/CadastroC'>Cadastro de Clientes</Link></button>
            </div>

            <div class="dropdown">
                <button class="dropbtn"><Link class="paginas" to='/CadastroP'>Cadastro de Produtos</Link></button>
            </div>

        </div>
    )

}