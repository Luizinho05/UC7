import prismaClient from '../../prisma'

interface AlteraCliente{
    id:                string
    alteraCelular:     string
	alteraRua:         string
	alteraComplemento: string
	alteraBairro:      string
	alteraCidade:      string
	alteraEstado:      string
	alteraPais:        string
}

class AlterarClienteServices{
    async execute({
        id,
        alteraCelular,
        alteraRua,
        alteraComplemento,
        alteraBairro,
        alteraCidade,
        alteraEstado,
        alteraPais
        }: AlteraCliente){
         await prismaClient.clientes.update({
            where:{
                id: id
            },
            data:{
                celular: alteraCelular,
                rua: alteraRua,
                complemento: alteraComplemento,
                bairro: alteraBairro,
                cidade: alteraCidade,
                estado: alteraEstado,
                pais: alteraPais
            }
         })
         return {dados: 'Dados alterados com sucesso'}
    }
}

export {AlterarClienteServices}