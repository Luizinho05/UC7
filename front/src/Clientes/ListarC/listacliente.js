import {useState, useEffect} from 'react'
import { FaTrashAlt, FaPencilAlt  } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import '../../css/listacliente.css'

export default function ListarClientes(){

    const [clientes, setClientes] = useState ([''])

   useEffect (() => {
   async function loadClientes(){
   const response = await api.get ('/ListarClientes')
   setClientes(response.data)
   }
   loadClientes()
  }, [clientes])

  async function excluirCliente(id){
    const resposta = await api.delete('/ApagarClientes',{
        data:{
            excluir: id
        }
    })
    toast.success(resposta.data.dados)
  }

     return(

        <div>
           <h1 className='titlePagina'>Informações dos Clientes</h1>

        {clientes.map((cliente) => {

            return(

                   <article key={cliente.id}>
                         <strong className='dados linhadivisora'>______________________________</strong><br/>
                         <div className='dados'>
                         <h3>{cliente.nome}</h3>
                         <h3>{cliente.cpf_cnpj}</h3>
                         <h3>{cliente.pais}</h3>
                            <h3 className='icons'>
                                <Link to={`/AlterarC/${cliente.id}`}><FaPencilAlt size='1.4rem' color='rgb(238, 171, 47)'/></Link>
                            </h3>
                            <h3 className='icons'>
                                <FaTrashAlt size='1.4rem' color='red'
                                onClick={() =>excluirCliente(cliente.id)}/>
                            </h3>
                            </div>
                   </article> 
                   
              )
        })}
      </div>

    )
}