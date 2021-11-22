/// <reference types="cypress" />
import CarrinhoSite from "../pages/Carrinho.page"

describe('Testes Positivos de Produtos',()=>{
    beforeEach(()=>{
        CarrinhoSite.acesso()
    })
    it("verifica elementos da página inicial",()=>{
        CarrinhoSite.elementosDaPaginaInicial()
    })
    it.only("Adiciona produto ao carrinho",()=>{
        CarrinhoSite.produtoNoCarrinho()
    })
})