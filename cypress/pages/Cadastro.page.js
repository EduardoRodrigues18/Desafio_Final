/// <reference types="cypress" />
import Base from './_base.page'
import { CADASTRO } from './components/Cadastro.elements'
import faker from 'faker'

function randomiza(n) {
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividendo,divisor) {
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function gerarCPF() {
    comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.
  
    var n = 9;
    var n1 = randomiza(n);
    var n2 = randomiza(n);
    var n3 = randomiza(n);
    var n4 = randomiza(n);
    var n5 = randomiza(n);
    var n6 = randomiza(n);
    var n7 = randomiza(n);
    var n8 = randomiza(n);
    var n9 = randomiza(n);
    var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
    d1 = 11 - ( mod(d1,11) );
    if (d1>=10) d1 = 0;
    var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
    d2 = 11 - ( mod(d2,11) );
    if (d2>=10) d2 = 0;
    retorno = '';
    if (comPontos) cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
    else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;

    alert(cpf);
}

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
        var CPF = gerarCPF()
        var NumeroTel= `5433${faker.datatype.number(111111111)}`
        var NumeroCell=`1191${faker.datatype.number(111111111)}`
        var password = faker.internet.password()
        var email = faker.internet.email()
        super.typeValue(CADASTRO.INPnome, `${faker.name.firstName()} ${faker.name.lastName()}`)
        //super.typeValue(CADASTRO.INPdata, '15/04/2000')
        super.typeValue(CADASTRO.INPcpf, CPF)
        super.typeValue(CADASTRO.INPtelefone, NumeroTel)
        super.typeValue(CADASTRO.INPcelular, NumeroCell)
        super.typeValue(CADASTRO.INPemail, email)
        super.typeValue(CADASTRO.INPemail2, email)
        super.typeValue(CADASTRO.INPsenha, password)
        super.typeValue(CADASTRO.INPsenha2, password)
        super.clickOnElement(CADASTRO.BTNavancar)
        cy.writeFile('./cypress/fixtures/example.json',{email: email, senha: password, CPF: CPF, NumeroCelular: NumeroCell, NumeroTelefone: NumeroTel})

    }

}