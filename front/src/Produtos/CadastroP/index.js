import React, { useState, useEffect } from 'react'
import './produtos.css'

export default function ProdutosCadastro() {

const [nome, setNome] = useState ('')
const [fabricante, setFabricante] = useState ('')
const [quantidade, setQuantidade] = useState ('')
const [preco, setPreco] = useState ('')

function handleCadastrar(event){
    event.preventDefault()
    if ( !nome || !fabricante || !quantidade || !preco ){
     alert('Existe Campos em Branco')
    }     
}

        return (
            <div id='formularioProduto'>
                <h1 className="temasinicialProduto">Cadastro de Produtos</h1>

                <form onSubmit={handleCadastrar}><br/>
                    <label className="contatoProduto"><strong>Nome:</strong></label>
                    <input
                   type='text'
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   /><br/><br/>
                    <label className='contatoProduto'><strong>Fabricante:</strong></label>
                    <input
                    type='text'
                    value={fabricante}
                    onChange={(e) => setFabricante(e.target.value)}
                    /><br/><br/>
                    <label className='contatoProduto'><strong>Quantidade:</strong></label>
                    <input
                    type='text'
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    /><br/><br/>
                    <label className='contatoProduto'><strong>Preço:</strong></label>
                    <input
                    type='text'
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    /><br/><br/>

                    <button type='submit' className='botaoProduto'><strong className="cadastrarProduto">Cadastrar</strong></button>

                </form>
        </div>
        )
    
}