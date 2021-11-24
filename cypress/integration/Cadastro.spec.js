/// <reference types="cypress" />
import CadastroSite from "../pages/Cadastro.page";

describe('Testes Positivos na rota cadastro',()=>{
    beforeEach(()=>{
        CadastroSite.acessoCadastro()
    })

    it('Deve verificar elementos da página: ',()=>{
        CadastroSite.elementosDaPaginaCasastro()
    })

    it.only('deve cadastrar um usuário:',()=>{
        CadastroSite.cadastrar()
    })

})
describe('Testes Negativos na rota cadastro',()=>{
    beforeEach(()=>{
        CadastroSite.acessoCadastro()
    })

    it('Deve tentar cadastrar sem email',()=>{
        CadastroSite.cadastrarSemEmail()
    })

    it('Deve tentar cadastrar sem senha',()=>{
        CadastroSite.cadastrarSemSenha()
    })

    it('Deve tentar cadastrar sem CPF',()=>{
        CadastroSite.cadastrarSemCPF()
    })


})