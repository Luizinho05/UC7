import { useState, useEffect } from 'react'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import '../../css/listaproduto.css'


export default function ListarProdutos() {

    const [produtos, setProduto] = useState([''])

    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get('/ListarProdutos')
            setProduto(response.data)
        }
        loadProdutos()
    }, [produtos])

    async function excluirProduto(id) {
        const resposta = await api.delete('/ApagarProdutos', {
            data: {
                deletar: id
            }
        })
        toast.success(resposta.data.dados)
    }

    return (

        <div className='conteinerListarProduto'>
            <h1 className='h1'>Informações dos Produtos</h1>
            <div className='Dados'>
                <table className='tabela'>
                    <thead className='thread'>
                        <tr>
                            <th className='valoresDefinidos'>ID</th>
                            <th className='valoresDefinidos'>Nome</th>
                            <th className='valoresDefinidos'>Fabricante</th>
                            <th className='valoresDefinidos'>Quantidade</th>
                            <th className='valoresDefinidos'>Banner</th>
                            <th className='valoresDefinidos'>Preço</th>
                            <th className='valoresDefinidos'>Criado</th>
                            <th className='valoresDefinidos'>Alterado</th>
                            <th className='valoresDefinidos'>Editar</th>
                            <th className='valoresDefinidos'>Apagar</th>
                        </tr>
                        {produtos.map((produto) => {

                            return (

                                <tr key={produto.id}>
                                  <td className='textoTabela'>{produto.id}</td>
                                  <td className='textoTabela'>{produto.nome}</td>
                                  <td className='textoTabela'>{produto.fabricante}</td>
                                  <td className='textoTabela'>{produto.quantidade}</td>
                                  <td className='textoTabela'><img className='image' src={`http://localhost:3333/files/${produto.banner}`} alt="" /></td>
                                  <td className='textoTabela'>{produto.preco}</td>
                                  <td className='textoTabela'>{produto.create_at}</td>
                                  <td className='textoTabela'>{produto.update_at}</td>
                                  <td className='Icons textoTabela'><Link to={`/AlterarP/${produto.id}`}><FaPencilAlt size='1.4rem' color='blue'/></Link></td>
                                  <td className='Icons textoTabela'><FaTrashAlt size='1.4rem' color='red' onClick={() => excluirProduto(produto.id)}/></td>
                                </tr>

                            )
                        })}
                    </thead>
                </table>
            </div>
        </div>

    )
}