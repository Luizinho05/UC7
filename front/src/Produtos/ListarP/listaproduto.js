import {useState, useEffect} from 'react'
import { FaTrashAlt, FaHighlighter } from 'react-icons/fa'
import api from '../../services/api'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
import '../../css/listaproduto.css'


export default function ListarProdutos(){

    const [produtos, setProduto] = useState ([''])

   useEffect (() => {
   async function loadProdutos(){
   const response = await api.get ('/ListarProdutos')
   setProduto(response.data)
   }
   loadProdutos()
  }, [produtos])

  async function excluirProduto(id){
    const resposta = await api.delete('/ApagarProdutos',{
        data:{
            deletar: id
        }
    })
    toast.success(resposta.data.dados)
  }

     return(

        <div>
           <h1 className='TitlePagina'>Informações dos Produtos</h1>

        {produtos.map((produto) => {

            return(

                   <article key={produto.id}>
                         <strong className='Dados linhaDivisora'>______________________________</strong><br/>
                         <div className='Dados'>
                         <h3>{produto.nome}</h3>
                         <h3>{produto.quantidade}</h3>
                         <h3>{produto.preco}</h3>
                            <h3 className='Icons'>
                                <Link to={`/AlterarP/${produto.id}`}><FaHighlighter size='1.4rem' color='blue'/></Link>
                            </h3>
                            <h3 className='Icons'>
                                <FaTrashAlt size='1.4rem' color='red'
                                onClick={() => excluirProduto(produto.id)}/>
                                 
                            </h3>
                            </div>
                   </article> 
                   
              )
        })}
      </div>

    )
}