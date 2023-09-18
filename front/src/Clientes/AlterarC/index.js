import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './Alterarcliente.css'

export default function AlterarCliente(){

    const navigation = useNavigate()
    const { id } = useParams()
    const [listaClienteUnico, setListaClienteUnico] = useState ('')
    const [alteraCelular, setAlteraCelular] = useState ('')
    const [alteraRua, setAlteraRua] = useState ('')
    const [alteraComplemento, setAlteraComplemento] = useState ('')
    const [alteraBairro, setAlteraBairro] = useState ('')
    const [alteraCidade, setAlteraCidade] = useState ('')
    const [alteraEstado, setAlteraEstado] = useState ('')
    const [alteraPais, setAlteraPais] = useState ('')

    useEffect(() => {
        async function listarClienteUnico(){
            const resposta = await api.get(`/ListarClienteUnico/${id}`)
            setListaClienteUnico(resposta.data)
        }
        listarClienteUnico()
    }, [id])

useEffect(() => {
    setAlteraCelular(listaClienteUnico.alteraCelular)
    setAlteraRua(listaClienteUnico.alteraRua)
    setAlteraComplemento(listaClienteUnico.alteraComplemento)
    setAlteraBairro(listaClienteUnico.alteraBairro)
    setAlteraCidade(listaClienteUnico.alteraCidade)
    setAlteraEstado(listaClienteUnico.alteraEstado)
    setAlteraPais(listaClienteUnico.alteraPais)
}, [listaClienteUnico])

    async function AlterarCliente(e){
        e.preventDefault()
        const resposta = await api.put('/AlterarCliente', {
            id,
            alteraCelular,
            alteraRua,
            alteraComplemento,
            alteraBairro,
            alteraCidade,
            alteraEstado,
            alteraPais
        })
        toast.info(resposta.data.dados)
        navigation('/listacliente')
    }

    return(
    <div className='estruturaAlterado'>
        <h1 id='tituloAltera'>Alterar Cliente</h1>

        <form onSubmit={AlterarCliente}><br/>
        
            
            <label id='atributos'>Celular:</label>
          <input placeholder='Digite o Celular' id='digitação'
          type='tel'
          value={alteraCelular}
          onChange={(e) => setAlteraCelular(e.target.value)}
          />
           <label id='atributos'>Rua:</label>
          <input placeholder='Digite a Rua' id='digitação'
          type='text'
          value={alteraRua}
          onChange={(e) => setAlteraRua(e.target.value)}
          />
            <label id='atributos'>Complemento:</label>
          <input placeholder='Digite o Complemento' id='digitação'
          type='text'
          value={alteraComplemento}
          onChange={(e) => setAlteraComplemento(e.target.value)}
          />
          <label id='atributos'>Bairro:</label>
          <input placeholder='Digite o Bairro' id='digitação'
          type='text'
          value={alteraBairro}
          onChange={(e) => setAlteraBairro(e.target.value)}
          />
          <label id='atributos'>Cidade:</label>
          <input placeholder='Digite a Cidade' id='digitação'
          type='text'
          value={alteraCidade}
          onChange={(e) => setAlteraCidade(e.target.value)}
          />
          <label id='atributos'>Estado:</label>
          <input placeholder='Digite o Estado' id='digitação'
          type='text'
          value={alteraEstado}
          onChange={(e) => setAlteraEstado(e.target.value)}
          /><br/>
          <label id='atributos'>Pais:</label>
          <input placeholder='Digite o País' id='digitação'
          type='text'
          value={alteraPais}
          onChange={(e) => setAlteraPais(e.target.value)}
          />
          <br/><br/>

          <button type='submit' className='alteraCliente'><strong>Alterar</strong></button>
        </form>
    </div>
    )
}