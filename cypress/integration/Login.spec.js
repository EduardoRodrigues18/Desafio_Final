/// <reference types="cypress" />
import LoginSite from "../pages/login.page"

describe('Testes Positivos na rota login:', () => {
    beforeEach(()=>{
        LoginSite.acesso()
    })

    it('deve verificar os elementos da página',() => {
        LoginSite.elementosDaPaginaLogin()

    })

    it('Deve efetuar Login',()=>{
        LoginSite.efetuarLogin()
    })

})

describe('Testes Negativos na rota login',()=>{
    beforeEach(()=>{
        LoginSite.acesso()
    })
    it('Deve tentar efetuar Login Sem Email',()=>{
        LoginSite.efetuarLoginSemEmail()
    })
    it('Deve tentar efetuar Login Com Senha Errada',()=>{
        LoginSite.efetuarLoginComSenhaErrada()
    })
})