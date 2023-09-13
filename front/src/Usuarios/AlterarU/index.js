import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './alterarUsuario.css'

export default function AlterarUsuario(){

    const { id } = useParams()
    const [listaUsuarioUnico, setListaUsuarioUnico ] = useState('')
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')

    useEffect(() => {
        async function listarUsuarioUnico(){
          const retorno = await api.get (`/ListarUsuarioUnico/${id}`)
          setListaUsuarioUnico(retorno.data) 
        }
        listarUsuarioUnico()
    }, [id])

    useEffect(() => {
        setNome(listaUsuarioUnico.nome)
        setEmail(listaUsuarioUnico.email)
    }, [listaUsuarioUnico])

    return(
        <div className='formularioAlterado'>
            <h1 id='temainicialAltera'>Alterar Usuário</h1>

            <form><br/>
                <label>Nome:</label>
                <input id='espaçoA'
                type='text'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <label>E-mail:</label>
                <input id='espaçoA'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <button type='submit' className='altera'><strong className='botaoaltera'>Alterar</strong></button>
            </form>
        </div>
    )
}