import { Link } from 'react-router-dom'
import banner from '../../fotos/lancheteria.png'
import fritas from '../../fotos/batatafrita.png'
import "./footer.css"

function Footer() {

    return (

        <footer className='footer'>
                <Link className='logo' to='/'><img id="banner" src={banner} alt="banner"></img></Link>
                <img id='fritas' src={fritas} alt="fritas"></img>
        </footer>
        

    )

}

export default Footer;