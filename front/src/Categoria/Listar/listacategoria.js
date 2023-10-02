import { useState, useEffect } from 'react'
import api from '../../services/api'
import '../../css/listarcategoria.css'

export default function ListarCategorias(){

    const [categorias, setCategorias] = useState([''])

    useEffect(() => {
        async function lerCategoria(){
            const response = await api.get('/ListarCategorias')
            setCategorias(response.data)
        }
        lerCategoria()
    }, [categorias])

    return(
      <div>
        <h1 className='PaginaTitulo'>informações das Categorias</h1>
        
            {categorias.map((categoria) => {

              return(
                <article key={categoria.id}>
                <strong className='DadosCategoria linhaDivisora'>______________________________</strong><br/>
                <div className='DadosCategoria'>
                    <h3>{categoria.id}</h3>
                    <h3>{categoria.nome}</h3>
                </div>
              </article>
              )

            })}
        
      </div>
    )

}