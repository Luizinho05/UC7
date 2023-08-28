import {useState, useEffect} from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import api from '../services/api'
import '../css/listaproduto.css'


export default function ListarProdutos(){

    const [produto, setProduto] = useState ([''])

   useEffect (() => {
   async function loadProdutos(){
   const response = await api.get ('/ListarProdutos')
   setProduto(response.data)

   }
   loadProdutos()

  }, [produto])

     return(

        <div>
           <h1 className='TitlePagina'>Informações dos Produtos</h1>

        {produto.map((produtos) => {

            return(

                   <article key={produtos.id}>
                         <strong className='Dados linhaDivisora'>______________________________</strong><br/>
                         <div className='Dados'>
                         <h3>{produtos.nome}</h3>
                         <h3>{produtos.quantidade}</h3>
                         <h3>{produtos.preco}</h3>
                            <h3 className='Icons'>
                                <FaTrashAlt size='1.4rem' color='red'/>
                            </h3>
                            </div>
                   </article> 
                   
              )
        })}
      </div>

    )
}