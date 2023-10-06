import { Link } from 'react-router-dom'
import { LuUserCircle2 } from 'react-icons/lu'
import './header7.css'
import '../../estilo.index.css'

export default function Header() {

    return (
        <div id="fundo">
            
            <div class='dropdown'>
                <button class='dropbtn'><Link className="mostarda" to='/LoginU'><LuUserCircle2 size='1.60rem' color='blue'/></Link></button>
            </div>

        

        </div>
    )

}