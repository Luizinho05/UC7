import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import api from '../../services/api'
// importar css

export default function AlterarCliente(){

    const { id } = useParams()
    const [listaClienteUnico, setListaClienteUnico] = useState ('')
    const [celular, setCelular] = useState ('')
    const [rua, setRua] = useState ('')
    const [complemento, setComplemento] = useState ('')
    const [bairro, setBairro] = useState ('')
    const [cidade, setCidade] = useState ('')
    const [estado, setEstado] = useState ('')
    const [pais, setPais] = useState ('')

    useEffect(() => {
        async function listarClienteUnico(){
            const resposta = await api.get(`/ListarClienteUnico/${id}`)
            setListaClienteUnico(resposta.data)
        }
        listarClienteUnico()
    }, [id])

useEffect(() => {
    setCelular(listaClienteUnico.celular)
    setRua(listaClienteUnico.rua)
    setComplemento(listaClienteUnico.complemento)
    setBairro(listaClienteUnico.bairro)
    setCidade(listaClienteUnico.cidade)
    setEstado(listaClienteUnico.estado)
    setPais(listaClienteUnico.pais)
}, [listaClienteUnico])


    return(
    <div>
        <h1>Alterar Cliente</h1>

        <form><br/>
          <label>Celular:</label>
          <input
          type='tel'
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          />
          <label>Rua:</label>
          <input
          type='text'
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          />
          <label>Complemento:</label>
          <input
          type='text'
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
          />
          <label>Bairro:</label>
          <input 
          type='text'
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          />
          <label>Cidade:</label>
          <input
          type='text'
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          />
          <label>Estado:</label>
          <input
          type='text'
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          />
          <label>País:</label>
          <input
          type='text'
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          />

          <button type='submit'>Alterar</button>
        </form>
        <Link to='/CadastroC'>Voltar para o cadastro</Link>
    </div>
    )
}