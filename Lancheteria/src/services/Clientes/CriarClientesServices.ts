import  prismaClient  from '../../prisma'

interface CriarCliente{
    nome:         string
    cpf_cnpj:     string
    rg_ie:        string
    celular:      string
    celularFixo:  string
    rua:          string
    complemento:  string
    bairro:       string
    cidade:       string
    estado:       string
}

class CriarClientesServices{
    async execute({
          nome,
          cpf_cnpj,
          rg_ie,
          celular,
          celularFixo,
          rua,
          complemento,
          bairro,
          cidade,
          estado}: CriarCliente){
        if(!nome || !cpf_cnpj || !rg_ie || !celular || !rua || !bairro || !cidade || !estado ){
                throw new Error('Campos em Branco não são permitidos')
            }
            const DocJaCadastrado = await prismaClient.clientes.findFirst({
                where:{
                    OR: [
                        {
                            cpf_cnpj: cpf_cnpj
                        },
                        {
                            rg_ie: rg_ie
                        }
                    ]
                }
            })

            if (DocJaCadastrado){
                throw new Error('CPF/CNPJ ou RG/IE já cadastrado')
            }

             await prismaClient.clientes.create({
                data:{
                    nome: nome,
                    cpf_cnpj: cpf_cnpj,
                    rg_ie: rg_ie,
                    celular: celular,
                    celularFixo: celularFixo,
                    rua: rua,
                    complemento: complemento,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado
                }
            })
            return {dados: "Seus Dados foram Salvos com Sucesso"}
    }
}

export {CriarClientesServices}