import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './login.css'

export default function LoginU(){
    
const navigation = useNavigate()
const [email, setEmail] = useState ([''])
const [password, setPassword] = useState ([''])


async function AuntenticarUsuario(e){
    e.preventDefault()
    if(!email || !password){
        toast.warn('Existem campos em branco!')
        return
    }
    try{
    const resposta = await api.post('/AutenticarUsuario', {
       email,
       password
    })
    navigation('/dashboard')
    toast.success(resposta.data.dados)
    }catch(err){
      toast.error(err.response.data.error)
    }
}

    return(
     <div className='formularioU'>
        <strong id='temasiniciaisU'>Login</strong>

        <form onSubmit={AuntenticarUsuario}><br/>

        <div>
        <input placeholder='E-mail' id='espaçoC'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /></div>
        <div>
        <input placeholder='Digite a Senha' id='espaçoC'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        /></div>
        <br/><br/>
              

       <button type='submit' className='botaologinU'><strong className='loginU'>logar</strong></button>
        </form>
     </div>
    )
}