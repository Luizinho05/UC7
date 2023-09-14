import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
// importar css

export default function AlterarCliente(){

    const { id } = useParams()
    const [listaClienteUnico, setListaClienteUnico] = useState ('')
    const [celular, setCelular] = useState ('')
    const [rua, setRua] = useState ('')
    const [complemento, setComplemento] = useState ('')
    const [bairro, setBairro] = useState ('')
    const [cidade, setCidade] = useState ('')
    const [estado, setEstado] = useState ('')
    const [pais, setPais] = useState ('')




    return(
    <div>
        <h1>Alterar Cliente</h1>
    </div>
    )
}