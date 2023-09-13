import {useState, useEffect} from 'react'
import { FaTrashAlt, FaHighlighter } from 'react-icons/fa'
import api from '../../services/api'
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
    await api.delete('/ApagarProdutos',{
        data:{
            deletar: id
        }
    })
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
                                <FaHighlighter size='1.4rem' color='blue'/>
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