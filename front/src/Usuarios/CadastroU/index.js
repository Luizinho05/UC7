import React, { useState } from 'react'
import './usuario.css'

export default function CadastroU() {

const [nome, setNome] = useState ('')
const [email, setEmail] = useState ('')
const [senha, setSenha] = useState ('')





function handleCadastrar(event){
    event.preventDefault()
    if ( !nome || !email || !senha ){
        alert('Existe Campos em Branco') 
     return
    }    
    alert (`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`) 
}

        return (
            <div id='formulariocadastroUsuario'>
                <h1 className="temasiniciaiscadastroUsuario">Cadastro do Usuário</h1>

                <form onSubmit={handleCadastrar}><br/>

                    <div>
                    <label className="contatoUsuario"><strong>Nome:</strong></label>
                    <input id='espaçoC'
                   type='text'
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   /><br/><br/>
                    <label className='contatoUsuario'><strong>E-mail:</strong></label>
                    <input id='espaçoC'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /><br/><br/>
                    <label className='contatoUsuario'><strong>Senha:</strong></label>
                    <input id='espaçoC'
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />
                    </div>
                    <br/><br/>

                    <button type='submit' className='botaodecadastroUsuario'><strong className="cadastrarUsuario">Cadastrar</strong></button>

                </form>
        </div>
        )
    
}