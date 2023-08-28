import {useState, useEffect} from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import api from '../services/api'
import '../css/listacliente.css'


export default function ListarClientes(){

    const [cliente, setClientes] = useState ([''])

   useEffect (() => {
   async function loadClientes(){
   const response = await api.get ('/ListarClientes')
   setClientes(response.data)

   }
   loadClientes()

  }, [cliente])

     return(

        <div>
           <h1 className='titlePagina'>Informações dos Clientes</h1>

        {cliente.map((clientes) => {

            return(

                   <article key={clientes.id}>
                         <strong className='dados linhadivisora'>______________________________</strong><br/>
                         <div className='dados'>
                         <h3>{clientes.nome}</h3>
                         <h3>{clientes.cpf_cnpj}</h3>
                         <h3>{clientes.estado}</h3>
                            <h3 className='icons'>
                                <FaTrashAlt size='1.4rem' color='red'/>
                            </h3>
                            </div>
                   </article> 
                   
              )
        })}
      </div>

    )
}
