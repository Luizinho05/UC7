import { Link } from 'react-router-dom'
import banner from '../../fotos/lancheteria.png'
import fritas from '../../fotos/batatafrita.png'
import pizza from '../../fotos/pizza.png'
import shawarma from '../../fotos/shawarma.png'
import pastel from '../../fotos/pastel.png'
import cachorroquente from '../../fotos/cachorroquente.png'
import churros from '../../fotos/churros.png'
import cocacola from '../../fotos/cocacola.png'
import laranja from '../../fotos/laranja.png'
import mistoquente from '../../fotos/mistoquente.png'
import "./footer.css"

function Footer() {

    return (

        <footer>
                <div id='comidas'>
                <img className='comida' src={laranja} alt="laranja"></img>
                <img className='comida' src={fritas} alt="fritas"></img>
                <img className='comida' src={pizza} alt="pizza"></img>
                <img className='comida' src={shawarma} alt="shawarma"></img>
                <Link className='logo' to='/'><img id='banner' src={banner} alt="banner"></img></Link>
                <img className='comida' src={pastel} alt="pastel"></img>
                <img className='comida' src={cachorroquente} alt="cachorroquente"></img>
                <img className='comida' src={churros} alt="churros"></img>
                <img className='comida' src={mistoquente} alt="mistoquente"></img>
                <img className='comida' src={cocacola} alt="cocacola"></img>
                </div>
        </footer>
        

    )

}

export default Footer;