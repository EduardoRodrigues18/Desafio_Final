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

    it("verifica elementos da Página carrinho",()=>{
        CarrinhoSite.elementosDaPaginaCarrinho()
    })

    it("Teste de Checkout da Compra:",()=>{
        CarrinhoSite.CheckoutCarrinho()
    })
})


describe('Testes Negativos na rota Produtos',()=>{
    beforeEach(()=>{
        CarrinhoSite.acesso()
    })

    it('Deve não conter itens no carrinho',()=>{
        CarrinhoSite.deletarProdutoDoCarrinho()

    })

})