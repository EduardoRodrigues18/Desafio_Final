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
        super.getElement(CARRINHO.BOTAO_adicionarProduto).click()
        super.clickOnElement(CARRINHO.CARRINHO_MODAL)
        super.verifyIfElementExists(CARRINHO.PRODUTO_NO_CARRINHO)

    }
}
