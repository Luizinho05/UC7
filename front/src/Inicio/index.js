import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {

    return (
        <div>
           <strong id='temaInicio'>Ínicio</strong><br/><br/>
           <p>Fala galera, beleza?</p>
           <p>Esse site foi feito com o intuito de saber codificar um Back-end e integrar com o Front-end.</p>
           <p>Tudo isso, dentro da UC7 do curso Técnico em Informática para Internet do SENAC</p>
           <p className='linkDireita'><Link to='/LoginU'>Você já está Cadastrado como usuário?</Link></p>
        </div>
    )
}