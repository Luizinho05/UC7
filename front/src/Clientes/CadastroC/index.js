import React, { useState, useEffect } from 'react'
import './clientes.css'

export default function ClienteCadastro() {

const [nome, setNome] = useState ('')
const [cpf_cnpj, setCpfCnpj] = useState ('')
const [rg_ie, setRgIe] = useState ('')
const [celular, setCelular] = useState ('')
const [celularFixo, setCelfixo] = useState ('')
const [rua, setRua] = useState ('')
const [complemento, setComplemento] = useState ('')
const [bairro, setBairro] = useState ('')
const [cidade, setCidade] = useState ('')
const [estado, setEstado] = useState ('')

function handleCadastrar(event){
    event.preventDefault()
    if ( !nome || !cpf_cnpj || !rg_ie || !celular || !celularFixo || !rua || !complemento ||
        !bairro || !cidade || !estado ){
     alert('Existe Campos em Branco')
    }     
}

        return (
            <div id='formulariocadastroCliente'>
                <h1 className="temainicialCliente">Cadastro de Clientes</h1>

                <form onSubmit={handleCadastrar}><br/>
                    <label className="contatoCliente"><strong>Nome:</strong></label>
                    <input
                   type='text'
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   /><br/><br/>
                    <label className='contatoCliente'><strong>CPF/CNPJ:</strong></label>
                    <input
                    type='text'
                    value={cpf_cnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>RG/IE:</strong></label>
                    <input
                    type='text'
                    value={rg_ie}
                    onChange={(e) => setRgIe(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Celular:</strong></label>
                    <input
                    type='text'
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Celular Fixo:</strong></label>
                    <input
                    type='text'
                    value={celularFixo}
                    onChange={(e) => setCelfixo(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Rua:</strong></label>
                    <input
                    type='text'
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Complemento:</strong></label>
                    <input
                    type='text'
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Bairro:</strong></label>
                    <input
                    type='text'
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Cidade:</strong></label>
                    <input
                    type='text'
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Estado:</strong></label>
                    <input
                    type='text'
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    /><br/><br/>

                    <button type='submit' className='botaodecadastroCliente'><strong className="cadastrarCliente">Cadastrar</strong></button>

                </form>
        </div>
        )
    
}