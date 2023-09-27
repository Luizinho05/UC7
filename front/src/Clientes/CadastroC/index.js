import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './clientes.css'

export default function ClienteCadastro() {

    const navigation = useNavigate()
    const [nome, setNome] = useState('')
    const [cpf_cnpj, setCpfCnpj] = useState('')
    const [rg_ie, setRgIe] = useState('')
    const [celular, setCelular] = useState('')
    const [celularFixo, setCelfixo] = useState('')
    const [rua, setRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [pais, setPais] = useState('')

    async function handleCadastrarCliente(e) {
        e.preventDefault()
        try {
            if (!nome || !cpf_cnpj || !rg_ie || !celular || !celularFixo || !rua || !complemento || !bairro || !cidade || !estado || !pais) {
                toast.warn('Existem campos em branco!')
                return
            }
            await api.post("/CriarClientes", {
                nome,
                cpf_cnpj,
                rg_ie,
                celular,
                celularFixo,
                rua,
                complemento,
                bairro,
                cidade,
                estado,
                pais
            })
            toast.success('Cliente cadastrado com sucesso!')
            navigation('/listacliente')
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }


    return (
        <div id='formulariocadastroCliente'>
            <strong className="temainicialCliente">Cadastro de Clientes</strong>
            <form onSubmit={handleCadastrarCliente}><br />

                <div>
                    <input placeholder='Nome' id='espaçoC'
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='CPF/CNPJ' id='espaçoC'
                        type='text'
                        value={cpf_cnpj}
                        onChange={(e) => setCpfCnpj(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='RG/IE' id='espaçoC'
                        type='text'
                        value={rg_ie}
                        onChange={(e) => setRgIe(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Celular' id='espaçoC'
                        type='text'
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Telefone Fixo' id='espaçoC'
                        type='text'
                        value={celularFixo}
                        onChange={(e) => setCelfixo(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Rua' id='espaçoC'
                        type='text'
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Complemento' id='espaçoC'
                        type='text'
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Bairro' id='espaçoC'
                        type='text'
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Cidade' id='espaçoC'
                        type='text'
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='Estado' id='espaçoC'
                        type='text'
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    /></div>
                <div>
                    <input placeholder='País' id='espaçoC'
                        type='text'
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                    /></div>
                <br /><br />

                <button type='submit' className='botaodecadastroCliente'><strong className="cadastrarCliente">Cadastrar</strong></button>

            </form>
        </div>
    )
}