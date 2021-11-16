import Base from './_base.page'
import { LOGIN } from './components/login.elements'

export default class LoginSite extends Base{
    static acesso(){
        cy.visit(LOGIN.URL)
    }
    static elementosDaPagina(){
        super.verifyIfElementExists(LOGIN.BOTAO_LOGIN)
    }
}