import React, { useState } from 'react'
import './clientes.css'

export default function ClienteCadastro() {

const [nome, setNome] = useState ([''])
const [cpf_cnpj, setCpfCnpj] = useState ([''])
const [rg_ie, setRgIe] = useState ([''])
const [celular, setCelular] = useState ([''])
const [celularFixo, setCelfixo] = useState ([''])
const [rua, setRua] = useState ([''])
const [complemento, setComplemento] = useState ([''])
const [bairro, setBairro] = useState ([''])
const [cidade, setCidade] = useState ([''])
const [estado, setEstado] = useState ('')

function handleCadastrar(event){
    event.preventDefault()
    if ( !nome || !cpf_cnpj || !celular || !celularFixo || !rua || !complemento ||
        !bairro || !cidade || !estado ){
            alert('Existe Campos em Branco')
            return
     }   
     alert (`Nome: ${nome} \nCPFouCNPJ: ${cpf_cnpj} \nRGouIE: ${rg_ie} \nCelular: ${celular} \nCelularFixo: ${celularFixo} \nRua: ${rua} \nComplemento: ${complemento} \nBairro: ${bairro} \nCidade: ${cidade} \nEstado: ${estado} `)  
}

        return (
            <div id='formulariocadastroCliente'>
                <strong className="temainicialCliente">Cadastro de Clientes</strong>
                <form onSubmit={handleCadastrar}><br/>

                    <div className='estruturabonita'>
                    <label className="contatoCliente"><strong>Nome:</strong></label>
                    <input id='espaçoC'
                   type='text'
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   /><br/><br/>
                    <label className='contatoCliente'><strong>CPF/CNPJ:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={cpf_cnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>RG/IE:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={rg_ie}
                    onChange={(e) => setRgIe(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Celular:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Celular Fixo:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={celularFixo}
                    onChange={(e) => setCelfixo(e.target.value)}
                    />
                    </div>
                    <div className='estruturabonita'>
                    <label className='contatoCliente'><strong>Rua:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Complemento:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Bairro:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Cidade:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    /><br/><br/>
                    <label className='contatoCliente'><strong>Estado:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    />
                    </div>
                    <br/><br/>

                    <button type='submit' className='botaodecadastroCliente'><strong className="cadastrarCliente">Cadastrar</strong></button>

                </form>
        </div>
        )
    
}