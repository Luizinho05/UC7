import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './alterarUsuario.css'

export default function AlterarUsuario(){

    const navigation = useNavigate()
    const { id } = useParams()
    const [listaUsuarioUnico, setListaUsuarioUnico ] = useState('')
    const [alteraNome, setAlteraNome] = useState ('')
    const [alteraEmail, setAlteraEmail] = useState ('')

    useEffect(() => {
        async function listarUsuarioUnico(){
          const retorno = await api.get (`/ListarUsuarioUnico/${id}`)
          setListaUsuarioUnico(retorno.data) 
        }
        listarUsuarioUnico()
    }, [id])

    useEffect(() => {
        setAlteraNome(listaUsuarioUnico.alteraNome)
        setAlteraEmail(listaUsuarioUnico.alteraEmail)
    }, [listaUsuarioUnico])

    async function AlterarUsuario(e){
        e.preventDefault()
       const resposta = await api.put ('/AlterarUsuario', {
        id,
        alteraNome,
        alteraEmail
       })
        toast.info(resposta.data.dados)
        navigation('/listausuario')
    }

    return(
        <div className='formularioAlterado'>
            <h1 id='temainicialAltera'>Alterar Usuário</h1>

            <form onSubmit={AlterarUsuario}><br/>
                
                <label id='valor'>Nome:</label>
                <input placeholder='Digite o Novo Nome' id='espaçoA'
                type='text'
                value={alteraNome}
                onChange={(e) => setAlteraNome(e.target.value)}
                />
                <label id='valor'>E-mail:</label>
                <input placeholder='Digite o Novo E-mail' id='espaçoA'
                type='email'
                value={alteraEmail}
                onChange={(e) => setAlteraEmail(e.target.value)}
                />

                <button type='submit' className='altera'><strong>Alterar</strong></button>
            </form>
        </div>
    )
}