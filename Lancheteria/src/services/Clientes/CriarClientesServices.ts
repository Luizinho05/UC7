import  prismaClient  from '../../prisma'

interface CriarCliente{
    nome: string
    cpf_cnpj : string
    rg_ie: string
    celular: string
    celularFixo: string
    rua: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
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
            const CpfOuCnpjJaCadastrado = await prismaClient.clientes.findFirst({
                where:{
                    cpf_cnpj: cpf_cnpj
                }

            })
            if (CpfOuCnpjJaCadastrado){
                throw new Error('Esse CPF ou CNPJ já está cadastrado')
            }

            const RgouIeJaCadastrado = await prismaClient.clientes.findFirst({
               where:{
                rg_ie: rg_ie
               }
            })
            if (RgouIeJaCadastrado){
                throw new Error('Esse RG ou IE já está cadastrado')
            }

            const cliente = await prismaClient.clientes.create({
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