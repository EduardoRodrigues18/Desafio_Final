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
