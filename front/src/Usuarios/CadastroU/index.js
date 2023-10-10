import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './usuario.css'

export default function CadastroU() {

  const navigation = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  async function handleCadastrar(e) {
    e.preventDefault()
    try {
      if (!nome || !email || !senha) {
        toast.warn('Existem campos em branco!')
        return
      }
      await api.post("/CriarUsuarios", {
        nome,
        email,
        senha
      })
      toast.success('Usuário cadastrado com sucesso!')
      navigation('/LoginU')
    } catch (err) {
      toast.error(err.response.data.error)
    }
  }

  return (
    <div id='formulariocadastroUsuario'>
      <strong className="temasiniciaiscadastroUsuario">Cadastro do Usuário</strong>

      <form onSubmit={handleCadastrar}><br />

        <div>
          <input placeholder='Nome' id='espaçoC'
            type='text'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          /></div>
        <div>
          <input placeholder='E-mail' id='espaçoC'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /></div>
        <div>
          <input placeholder='Digite a Senha' id='espaçoC'
            type='password'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          /></div>
        <br /><br />

        <button type='submit' className='botaodecadastroUsuario'><strong className="cadastrarUsuario">Cadastrar</strong></button>

      </form>
    </div>
  )

}