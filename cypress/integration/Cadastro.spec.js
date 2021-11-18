/// <reference types="cypress" />
import CadastroSite from "../pages/Cadastro.page";

describe('Testes da pagina de cadastro',()=>{
    it('Deve verificar elementos da pagina: ',()=>{
        CadastroSite.acessoCadastro()
        CadastroSite.elementosDaPaginaCasastro()
        CadastroSite.cadastrar()
        
    })
})