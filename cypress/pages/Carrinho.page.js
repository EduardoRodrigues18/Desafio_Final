import Base from './_base.page'
import {CARRINHO} from './components/Carrinho.elements'

export default class CarrinhoSite extends Base{
    static acesso(){
        cy.visit("https://701523.commercesuite.com.br")
    }
    static elementosDaPaginaInicial(){
        super.verifyIfElementExists(CARRINHO.BANNER)
        super.verifyIfElementExists(CARRINHO.BOTAO_adicionar)
        super.verifyIfElementExists(CARRINHO.CARRINHO)
        super.verifyIfElementExists(CARRINHO.ClassesDeProdutos)
        super.verifyIfElementExists(CARRINHO.INPsearch)
        super.verifyIfElementExists(CARRINHO.PRODUTOS)
    }
    static produtoNoCarrinho(){
        super.clickOnElement(CARRINHO.BOTAO_adicionar).first()
    }
}
