import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './produtos.css'

export default function ProdutosCadastro() {

const navigation = useNavigate()
const [nome, setNome] = useState ('')
const [fabricante, setFabricante] = useState ('')
const [quantidade, setQuantidade] = useState ('')
const [preco, setPreco] = useState ('')

function ProdutoCadastrar(e){
       e.preventDefault()
     if(!nome || !fabricante || !quantidade || !preco){
     toast.warn('Existem campos em branco!')
      return
    }
      api.post("/CriarProdutos", {
        nome,
        fabricante,
        quantidade,
        preco
          })
        toast.success('Produto cadastrado com sucesso!')
        navigation('/listaproduto')
}

        return (
            <div id='formularioProduto'>
                <strong className="temasinicialProduto">Cadastro de Produtos</strong>

                <form onSubmit={ProdutoCadastrar}><br/>
                    
                    <div>
                    <input placeholder='Nome' id='espaçoC'
                   type='text'
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   /><br/>
                    <input placeholder='Fabricante' id='espaçoC'
                    type='text'
                    value={fabricante}
                    onChange={(e) => setFabricante(e.target.value)}
                    /><br/>
                    </div>
                    <div>
                    <input placeholder='Quantidade' id='espaçoC'
                    type='text'
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    /><br/>
                    <input placeholder='Preço' id='espaçoC'
                    type='text'
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    /></div>
                    <br/><br/>

                    <button type='submit' className='botaoProduto'><strong className="cadastrarProduto">Cadastrar</strong></button>

                </form>
        </div>
        )
    
}