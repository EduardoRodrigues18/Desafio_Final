/// <reference types="cypress" />
import CadastroSite from "../pages/Cadastro.page";

describe('Testes Positivos na página de cadastro',()=>{
    beforeEach(()=>{
        CadastroSite.acessoCadastro()
    })

    it('Deve verificar elementos da página: ',()=>{
        CadastroSite.elementosDaPaginaCasastro()
    })

    it('deve cadastrar um usuario:',()=>{
        CadastroSite.cadastrar()
    })

})
describe('Testes Negativos na página de cadastro',()=>{
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