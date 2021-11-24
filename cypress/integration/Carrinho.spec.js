/// <reference types="cypress" />
import CarrinhoSite from "../pages/Carrinho.page"

describe('Testes Positivos na rota Produtos',()=>{
    beforeEach(()=>{
        CarrinhoSite.acesso()
    })
    it("verifica elementos da página inicial",()=>{
        CarrinhoSite.elementosDaPaginaInicial()
    })
    it("Adiciona produto ao carrinho",()=>{
        CarrinhoSite.produtoNoCarrinho()
    })
    it("Teste de Checkout da Compra:",()=>{
        CarrinhoSite.CheckoutCarrinho()
    })
})


describe('Testes Negativos na rota Produtos',()=>{
    beforeEach(()=>{
        CarrinhoSite.acesso()
    })
    it.only('Deve não conter itens no carrinho',()=>{
        CarrinhoSite.deletarProdutoDoCarrinho()

    })

})