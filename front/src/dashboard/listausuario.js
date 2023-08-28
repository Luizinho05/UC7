import {useState, useEffect} from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import api from '../services/api'
import '../css/listausuario.css'


export default function ListarUsuarios(){

    const [usuario, setUsuarios] = useState ([''])

   useEffect (() => {
   async function loadUsuarios(){
       const response = await api.get ('/ListarUsuarios')
       setUsuarios(response.data)
   }
   loadUsuarios()
  }, [usuario])

 

     return(

        <div>
           <h1 className='TituloPagina'>Informações de Usuarios</h1>

        {usuario.map((usuarios) => {

            return(

                   <article key={usuarios.id}>
                         <strong className='Info linhaDivision'>______________________________</strong><br/>
                         <div className='Info'>
                         <h3>{usuarios.nome}</h3>
                         <h3>{usuarios.email}</h3>
                        <h3 className='icones'>
                         <FaTrashAlt size='1.4rem' color='red'/>
                            </h3>
                            </div>
                   </article> 
                   )
        })}
      </div>

    )
}