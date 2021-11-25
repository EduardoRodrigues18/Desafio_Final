/// <reference types="cypress" />
import Base from './_base.page'
import {CARRINHO} from './components/Carrinho.elements'







export default class CarrinhoSite extends Base{
    static acesso(){
       cy.visit(CARRINHO.URL)
   }


    static elementosDaPaginaInicial(){
        super.verifyIfElementExists(CARRINHO.BANNER)
        super.verifyIfElementExists(CARRINHO.BOTAO_adicionarProduto)
        super.verifyIfElementExists(CARRINHO.CARRINHO_MODAL)
        super.verifyIfElementExists(CARRINHO.ClassesDeProdutos)
        super.verifyIfElementExists(CARRINHO.INPsearch)
        super.verifyIfElementExists(CARRINHO.PRODUTOS)
    }


    static produtoNoCarrinho(){
        super.getElement(CARRINHO.BOTAO_adicionarProduto).first().click({force: true})
        super.clickOnElement(CARRINHO.CARRINHO_MODAL)
        super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHO)
        cy.wait(5000)
        super.clickOnElement(CARRINHO.BTN_FinalizarPedido)

    }

    
    static elementosDaPaginaCarrinho(){
        super.getElement(CARRINHO.BOTAO_adicionarProduto).first().click({force: true})
        super.clickOnElement(CARRINHO.CARRINHO_MODAL)
        super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHO)
        cy.wait(5000)
        super.clickOnElement(CARRINHO.BTN_FinalizarPedido)
        super.verifyIfElementExists(CARRINHO.CONTINUAR_CARRINHO)
        super.verifyIfElementExists(CARRINHO.ProdutoNaPaginaCarrinho)
        super.verifyIfElementExists(CARRINHO.INP_CEPNaPaginaCarrinho)

    }


    static CheckoutCarrinho(){
        cy.fixture("example").then((user)=>{
            super.getElement(CARRINHO.BOTAO_adicionarProduto).first().click({force: true})
            super.clickOnElement(CARRINHO.CARRINHO_MODAL)
            super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHO)
            cy.wait(5000)
            super.clickOnElement(CARRINHO.BTN_FinalizarPedido)
            super.verifyIfElementExists(CARRINHO.ProdutoNaPaginaCarrinho)
            super.clickOnElement(CARRINHO.CONTINUAR_CARRINHO)
            super.typeValue(CARRINHO.INP_CPF, user.CPF)
            super.clickOnElement(CARRINHO.CONTINUAR_CPF)
            // var BTN

            // cy.get(CARRINHO.PERGUNTA).then(security=>{
            //     if(security.find("p:contains('Quais os primeiros digitos do seu CPF?')").length>0){
            //         cy.log(BTN)
            //         BTN= user.CPF.substring(0, 6)
            //         cy.wait(20000)
            //         cy.log(BTN)
            //     }else if(security.find("p:contains('Qual o seu sobrenome?')").length>0){
            //         cy.log(BTN)
            //         BTN = user.nome.split(' ')[1]
            //         cy.wait(20000)
            //         cy.log(BTN)
            //     }else if(security.find("p:contains('Quais os últimos digitos do seu CPF?')").length>0){
            //         cy.log(BTN)
            //         BTN= user.CPF.slice(-6)
            //         cy.wait(20000)
            //         cy.log(BTN)
            //     }else if(security.find("p:contains('Qual o seu endereço de entrega?')").length>0){
            //         cy.log(BTN)
            //         BTN= user.NomeDoEndereco.split(0, 6)[2]
            //         cy.wait(20000)
            //         cy.log(BTN)
            //     }
            //     cy.wait(20000)
            //     super.getElement(CARRINHO.ESCOLHA).contains(BTN).click()

            // })



        })
    }


    static deletarProdutoDoCarrinho(){
        super.getElement(CARRINHO.BOTAO_adicionarProduto).first().click({force: true})
        super.clickOnElement(CARRINHO.CARRINHO_MODAL)
        super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHO)
        super.clickOnElement(CARRINHO.BTN_limparCarrinho)
        super.getElement(CARRINHO.CARRINHO_MODAL).should("contain", 0)
    }


}
