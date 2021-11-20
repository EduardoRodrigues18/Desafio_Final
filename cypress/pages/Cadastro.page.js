/// <reference types="cypress" />
import Base from './_base.page'
import { CADASTRO } from './components/Cadastro.elements'
import faker from 'faker'

export default class CadastroSite extends Base{
    static acessoCadastro(){
        cy.visit(CADASTRO.URL)
    }
    static elementosDaPaginaCasastro(){
        super.verifyIfElementExists(CADASTRO.INPnome)
        super.verifyIfElementExists(CADASTRO.INPdata)
        super.verifyIfElementExists(CADASTRO.INPcpf)
        super.verifyIfElementExists(CADASTRO.INPtelefone)
        super.verifyIfElementExists(CADASTRO.INPcelular)
        super.verifyIfElementExists(CADASTRO.INPemail)
        super.verifyIfElementExists(CADASTRO.INPemail2)
        super.verifyIfElementExists(CADASTRO.INPsenha)
        super.verifyIfElementExists(CADASTRO.INPsenha2)
        super.verifyIfElementExists(CADASTRO.BTNavancar)
        super.verifyIfElementExists(CADASTRO.BTNcadastro)
    }
    static cadastrar(){
        super.typeValue(CADASTRO.INPnome, `${faker.name.firstName()} ${faker.name.lastName()}`)
        super.typeValue(CADASTRO.INPdata, '15/04/2000')
        super.typeValue(CADASTRO.INPcpf, `${faker.datatype.number(11111111)}0059`)
        super.typeValue(CADASTRO.INPtelefone, `5433${faker.datatype.number(111111111)}`)
        super.typeValue(CADASTRO.INPcelular, `1191${faker.datatype.number(111111111)}`)
        var email = faker.internet.email()
        super.typeValue(CADASTRO.INPemail, email)
        super.typeValue(CADASTRO.INPemail2, email)
        var password = faker.internet.password()
        cy.writeFile('./cypress/fixtures/example.json',{email: email, senha: password})
    
        super.typeValue(CADASTRO.INPsenha, password)
        super.typeValue(CADASTRO.INPsenha2, password)
        //super.clickOnElement(CADASTRO.BTNavancar)

    }
}