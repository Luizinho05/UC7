import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './AlterarProduto.css'

export default function AlterarProduto(){

    const navigation = useNavigate()
    const { id } = useParams()
    const [listaProdutoUnico, setListaProdutoUnico] = useState('')
    const [alteraQuantidade, setAlteraQuantidade] = useState ('')
    const [alteraPreco, setAlteraPreco] = useState ('')

    useEffect(() => {
        async function listarProdutoUnico(){
            const RespostaRecebida = await api.get(`/ListarProdutoUnico/${id}`)
            setListaProdutoUnico(RespostaRecebida.data)
        }
        listarProdutoUnico()
    }, [id])

    useEffect(() => {
        setAlteraQuantidade(listaProdutoUnico.alteraQuantidade)
        setAlteraPreco(listaProdutoUnico.alteraPreco)
    }, [listaProdutoUnico])

    async function AlterarProduto(e){
        e.preventDefault()
        const resposta = await api.put('/AlterarProduto', {
            id,
            alteraQuantidade,
            alteraPreco
        })
        toast.info(resposta.data.dados)
        navigation('/listaproduto')
    }

    return(
      
        <div className='fichaManipulada'>
        <h1 id='temainicialManipulado'>Alterar Produto</h1>

        <form onSubmit={AlterarProduto}><br/>
          <label id='atribuicao'>Quantidade:</label>
          <input placeholder='Digite a Quantidade' id='espaçoM'
          type='number'
          value={alteraQuantidade}
          onChange={(e) => setAlteraQuantidade(e.target.value)}
          />
          <label id='atribuicao'>Preço:</label>
          <input placeholder='Digite o Preço' id='espaçoM'
          type='text'
          value={alteraPreco}
          onChange={(e) => setAlteraPreco(e.target.value)}
          />
            <button type='submit' className='alteraProduto'><strong>Alterar</strong></button>
        </form>
      </div>
    )
}