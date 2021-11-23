import Base from './_base.page'
import { LOGIN } from './components/login.elements'

export default class LoginSite extends Base{
    static acesso(){
        cy.visit(LOGIN.URL)
    }
    static elementosDaPaginaLogin(){
        super.verifyIfElementExists(LOGIN.BOTAO_ENTRAR)
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
        super.typeValue(LOGIN.INP_EMAIL, "emailteste@gmail.com")
        super.verifyIfElementExists(LOGIN.BOTAO_CONTINUARemail)
        super.clickOnElement(LOGIN.BOTAO_CONTINUARemail)
        super.verifyIfElementExists(LOGIN.BOTAO_CONTINUARsenha)
        super.verifyIfElementExists(LOGIN.INPsearch)
    }


    static efetuarLogin(){
        cy.visit(LOGIN.URL)
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
        cy.fixture("example").then((user)=>{
            super.typeValue(LOGIN.INP_EMAIL ,user.email)
            super.clickOnElement(LOGIN.BOTAO_CONTINUARemail)
            super.typeValue(LOGIN.INP_SENHA, user.senha)
            super.clickOnElement(LOGIN.BOTAO_CONTINUARsenha)
            super.clickOnElement(LOGIN.BOTAO_INICIO)
        })
    }


    static efetuarLoginSemEmail(){
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
        cy.fixture("example").then((user)=>{
            super.typeValue(LOGIN.INP_EMAIL, "emailerrado@gmail.com")
            super.clickOnElement(LOGIN.BOTAO_CONTINUARemail)
            super.typeValue(LOGIN.INP_SENHA, user.senha)
            super.clickOnElement(LOGIN.BOTAO_CONTINUARsenha)
        })
        
    }


    static efetuarLoginComSenhaErrada(){
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
        cy.fixture("example").then((user)=>{
            super.typeValue(LOGIN.INP_EMAIL ,user.email)
            super.clickOnElement(LOGIN.BOTAO_CONTINUARemail)
            super.typeValue(LOGIN.INP_SENHA, "senhaErrada")
            super.clickOnElement(LOGIN.BOTAO_CONTINUARsenha)
        })
    }
}