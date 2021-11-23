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
        super.clickOnElement(CARRINHO.BOTAO_adicionarProduto)
        super.clickOnElement(CARRINHO.CARRINHO_MODAL)
        super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHO)
        super.clickOnElement(CARRINHO.CARRINHO_MODAL)

    }


    static acessoCarrinho(){
        cy.fixture("example").then((user)=>{
            cy.visit(CARRINHO.URL_COM_PRODUTO)
            super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHOpg)
            super.clickOnElement(CARRINHO.CONTINUAR_CARRINHO)
            super.typeValue(CARRINHO.INP_CPF, user.CPF)
            super.clickOnElement(CARRINHO.CONTINUAR_CPF)
        })
    }
}
