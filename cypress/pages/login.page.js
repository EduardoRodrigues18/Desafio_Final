import Base from './_base.page'
import { LOGIN } from './components/login.elements'

export default class LoginSite extends Base{
    static acesso(){
        cy.visit(LOGIN.URL)
    }
    static cadastroDeEndereco(){
        cy.fixture("example").then((user)=>{
            cy.wait(5000)
            super.getElement(LOGIN.BTN_MeusEnderecos).click()
            cy.wait(5000)
            super.clickOnElement(LOGIN.BTN_editarEndereco)
            super.typeValue(LOGIN.INP_NomeEndereco, user.NomeDoEndereco)
            super.typeValue(LOGIN.INP_CEP, user.CEP)
            cy.wait(4000)
            super.typeValue(LOGIN.INP_Complemento, user.complemento)
            super.typeValue(LOGIN.INP_Numero, user.Numero)
            super.clickOnElement(LOGIN.BTN_SalvarAlteracoes)
        })

    }
    static elementosDaPaginaLogin(){
        super.verifyIfElementExists(LOGIN.BTN_ENTRAR)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.typeValue(LOGIN.INP_EMAIL, "emailteste@gmail.com")
        super.verifyIfElementExists(LOGIN.BTN_CONTINUARemail)
        super.clickOnElement(LOGIN.BTN_CONTINUARemail)
        super.verifyIfElementExists(LOGIN.BTN_CONTINUARsenha)
        super.verifyIfElementExists(LOGIN.INPsearch)
    }


    static efetuarLogin(){
        cy.visit(LOGIN.URL)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        cy.fixture("example").then((user)=>{
            super.typeValue(LOGIN.INP_EMAIL ,user.email)
            super.clickOnElement(LOGIN.BTN_CONTINUARemail)
            super.typeValue(LOGIN.INP_SENHA, user.senha)
            super.clickOnElement(LOGIN.BTN_CONTINUARsenha)
            super.clickOnElement(LOGIN.BTN_INICIO)
        })
    }


    static efetuarLoginSemEmail(){
        super.clickOnElement(LOGIN.BTN_LOGIN)
        cy.fixture("example").then((user)=>{
            super.typeValue(LOGIN.INP_EMAIL, "emailerrado@gmail.com")
            super.clickOnElement(LOGIN.BTN_CONTINUARemail)
            super.typeValue(LOGIN.INP_SENHA, user.senha)
            super.clickOnElement(LOGIN.BTN_CONTINUARsenha)
        })
        
    }


    static efetuarLoginComSenhaErrada(){
        super.clickOnElement(LOGIN.BTN_LOGIN)
        cy.fixture("example").then((user)=>{
            super.typeValue(LOGIN.INP_EMAIL ,user.email)
            super.clickOnElement(LOGIN.BTN_CONTINUARemail)
            super.typeValue(LOGIN.INP_SENHA, "senhaErrada")
            super.clickOnElement(LOGIN.BTN_CONTINUARsenha)
        })
    }
}