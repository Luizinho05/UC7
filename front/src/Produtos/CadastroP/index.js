import React, { useState } from 'react'
import api from '../../services/api'
import './produtos.css'

export default function ProdutosCadastro() {

const [nome, setNome] = useState ('')
const [fabricante, setFabricante] = useState ('')
const [quantidade, setQuantidade] = useState ('')
const [preco, setPreco] = useState ('')

function ProdutoCadastrar(){
          api.post("/CriarProdutos", {
            nome,
            fabricante,
            quantidade,
            preco
          })
}

        return (
            <div id='formularioProduto'>
                <strong className="temasinicialProduto">Cadastro de Produtos</strong>

                <form onSubmit={ProdutoCadastrar} action='/listaproduto'><br/>
                    
                    <div>
                    <label className="contatoProduto"><strong>Nome:</strong></label>
                    <input id='espaçoC'
                   type='text'
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   /><br/>
                    <label className='contatoProduto'><strong>Fabricante:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={fabricante}
                    onChange={(e) => setFabricante(e.target.value)}
                    /><br/>
                    </div>
                    <div>
                    <label className='contatoProduto'><strong>Quantidade:</strong></label>
                    <input id='espaçoC'
                    type='text'
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    /><br/>
                    <label className='contatoProduto'><strong>Preço:</strong></label>
                    <input id='espaçoC'
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