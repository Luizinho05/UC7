import React, { useState } from 'react'
import './login.css'

export default function LoginU(){
    
const [email, setEmail] = useState ('')
const [senha, setSenha] = useState ('')


function handleLogar(event){
    event.preventDefault()
    if ( !email || !senha){
        alert('Tem Campos em branco')
        return
    }
    alert (`E-mail: ${email} \nSenha: ${senha}`)
}


    return(
     <div className='formularioU'>
        <strong id='temasiniciaisU'>Login de Usuário</strong>

        <form onSubmit={handleLogar}><br/>

        <div>
        <label><strong className='contatoU'>E-mail:</strong></label>
        <input id='espaçoC'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /></div><br/>
        <div>
        <label><strong className='contatoU'>Senha:</strong></label>
        <input id='espaçoC'
        type='password'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        /></div>
        <br/><br/>
              

       <button type='submit' className='botaologinU'><strong className='loginU'>logar</strong></button>
        </form>
     </div>
    )
}