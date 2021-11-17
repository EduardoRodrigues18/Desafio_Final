/// <reference types="cypress" />
import LoginSite from "../pages/login.page"

describe('Testes de login:', () => {
    it('deve verificar os elementos da página',() => {
        LoginSite.acesso()
        LoginSite.elementosDaPagina()

    })
})