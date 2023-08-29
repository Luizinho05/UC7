import {useState, useEffect} from 'react'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import api from '../services/api'
import '../css/listausuario.css'


export default function ListarUsuarios(){

    const [usuarios, setUsuarios] = useState ([''])

   useEffect (() => {
   async function loadUsuarios(){
       const response = await api.get ('/ListarUsuarios')
       setUsuarios(response.data)
   }
   loadUsuarios()
  }, [usuarios])

 async function excluirUsuario(id){
   await api.delete ('/ApagarUsuarios', {
    data:{
        remove: id
    }
   })
}

 

     return(

        <div>
           <h1 className='TituloPagina'>Informações de Usuarios</h1>

        {usuarios.map((usuario) => {

            return(

                   <article key={usuario.id}>
                         <strong className='Info linhaDivision'>______________________________</strong><br/>
                         <div className='Info'>
                         <h3>{usuario.nome}</h3>
                         <h3>{usuario.email}</h3>
                        <h3 className='icones'>
                                <FaPen size='1.4rem' color='blue'/>
                        </h3>
                        <h3 className='icones'>
                         <FaTrashAlt size='1.4rem' color='red'
                         onClick={() => excluirUsuario(usuario.id)}/>
                            </h3>
                            </div>
                   </article> 
                   )
        })}
      </div>

    )
}