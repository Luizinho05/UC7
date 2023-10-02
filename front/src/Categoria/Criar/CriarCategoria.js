import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './categoria.css'

export default function CadastrarCategoria(){

    const navigation = useNavigate()
    const [nome, setNome] = useState('')

   async function CadastrarCategoria(e){
   e.preventDefault()
   if (!nome){
        toast.warn('Defina um nome para a categoria!')
        return
    }
    await api.post('/CriarCategorias', {
        nome
    })
    toast.success('Categoria registrada com sucesso!')
    navigation('/listacategoria')
   }

   return(
    <div id='formulariocadastroCategoria'>
        <strong className='temainicialCategoria'>Cadastro de categoria</strong>

        <form onSubmit={CadastrarCategoria}><br />
        <div>
           <input placeholder='Categoria' id='espaçoCategoria'
           type='text'
           value={nome}
           onChange={(e) => setNome(e.target.value)}
           /></div>
           <br/><br/>

           <button type='submit' className='botaocadastrar'><strong className='cadastrarCategoria'>Cadastrar</strong></button>
        </form>
    </div>
   )

}