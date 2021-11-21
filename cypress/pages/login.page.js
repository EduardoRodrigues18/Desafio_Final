import Base from './_base.page'
import { LOGIN } from './components/login.elements'

export default class LoginSite extends Base{
    static acesso(){
        cy.visit(Cypress.env("BASE_URL"))
    }
    static elementosDaPagina(){
        super.verifyIfElementExists(LOGIN.BANNER)
        super.verifyIfElementExists(LOGIN.BOTAO_ENTRAR)
        super.verifyIfElementExists(LOGIN.CARRINHO)
        super.verifyIfElementExists(LOGIN.INPsearch)
        super.verifyIfElementExists(LOGIN.PRODUTOS)
        super.clickOnElement(LOGIN.BOTAO_ENTRAR)
    }
    static efetuarLogin(){
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
    }
}