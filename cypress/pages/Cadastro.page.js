/// <reference types="cypress" />
import Base from './_base.page'
import { CADASTRO } from './components/Cadastro.elements'
import faker from 'faker'

const cpf = document.getElementById("cpf"); 

function gerarCpf() {
  const num1 = aleatorio();
  const num2 = aleatorio();
  const num3 = aleatorio();
  const dig1 = dig(num1, num2, num3);
  const dig2 = dig(num1, num2, num3, dig1);
  return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}

function dig(n1, n2, n3, n4) { 
  const nums = n1.split("").concat(n2.split(""), n3.split(""));
  if (n4 !== undefined){ 
    nums[9] = n4;
  }
  
  let x = 0;
  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  
  const y = x % 11;
  return y < 2 ? 0 : 11 - y; 
}

function aleatorio() {
  const aleat = Math.floor(Math.random() * 999);
  return ("" + aleat).padStart(3, '0'); 
}

var CPF = gerarCpf()
var NumeroTel= `5433${faker.datatype.number(111111111)}`
var NumeroCell=`1191${faker.datatype.number(111111111)}`
var password = faker.internet.password()
var passwordNegativo = faker.internet.password()
var email = faker.internet.email()
var emailNegativo = faker.internet.email()
var INPnome = `${faker.name.firstName()} ${faker.name.lastName()}`

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

        super.typeValue(CADASTRO.INPnome, INPnome)
        super.typeValue(CADASTRO.INPdata, "16/04/2001")
        super.typeValue(CADASTRO.INPcpf, CPF)
        super.typeValue(CADASTRO.INPtelefone, NumeroTel)
        super.typeValue(CADASTRO.INPcelular, NumeroCell)
        super.typeValue(CADASTRO.INPemail, email)
        super.typeValue(CADASTRO.INPemail2, email)
        super.typeValue(CADASTRO.INPsenha, password)
        super.typeValue(CADASTRO.INPsenha2, password)
        super.clickOnElement(CADASTRO.BTNavancar)
        cy.writeFile('./cypress/fixtures/example.json',{nome: INPnome, email: email, senha: password, CPF: CPF, NumeroCelular: NumeroCell, NumeroTelefone: NumeroTel, NomeDoEndereco: "Rua Mário Chalbald Biscaia",CEP: "81050-240",Numero: "N°10",complemento: "Perto da escola tal",})
        

    }


    static cadastrarSemEmail(){

        super.typeValue(CADASTRO.INPnome, `${faker.name.firstName()} ${faker.name.lastName()}`)
        super.typeValue(CADASTRO.INPdata, "16/04/2001")
        super.typeValue(CADASTRO.INPcpf, gerarCpf())
        super.typeValue(CADASTRO.INPtelefone, NumeroTel)
        super.typeValue(CADASTRO.INPcelular, NumeroCell)
        super.typeValue(CADASTRO.INPsenha, passwordNegativo)
        super.typeValue(CADASTRO.INPsenha2, passwordNegativo)
        super.clickOnElement(CADASTRO.BTNavancar)
        super.verifyIfElementExists(CADASTRO.MSGErroEmail)
    }


    static cadastrarSemSenha(){

        super.typeValue(CADASTRO.INPnome, `${faker.name.firstName()} ${faker.name.lastName()}`)
        super.typeValue(CADASTRO.INPdata, "16/04/2001")
        super.typeValue(CADASTRO.INPcpf, gerarCpf())
        super.typeValue(CADASTRO.INPtelefone, NumeroTel)
        super.typeValue(CADASTRO.INPcelular, NumeroCell)
        super.typeValue(CADASTRO.INPemail, emailNegativo)
        super.typeValue(CADASTRO.INPemail2, emailNegativo)
        super.clickOnElement(CADASTRO.BTNavancar)
        super.verifyIfElementExists(CADASTRO.MSGErroEmail)
    }


    static cadastrarSemCPF(){
        super.typeValue(CADASTRO.INPnome, `${faker.name.firstName()} ${faker.name.lastName()}`)
        super.typeValue(CADASTRO.INPdata, "16/04/2001")
        super.typeValue(CADASTRO.INPtelefone, NumeroTel)
        super.typeValue(CADASTRO.INPcelular, NumeroCell)
        super.typeValue(CADASTRO.INPemail, emailNegativo)
        super.typeValue(CADASTRO.INPemail2, emailNegativo)
        super.typeValue(CADASTRO.INPsenha, passwordNegativo)
        super.typeValue(CADASTRO.INPsenha2, passwordNegativo)
        super.clickOnElement(CADASTRO.BTNavancar)
        super.verifyIfElementExists(CADASTRO.MSGErroCPF)
    }
}