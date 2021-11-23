/// <reference types="cypress" />
import CarrinhoSite from "../pages/Carrinho.page"
import LoginSite from "../pages/login.page"

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
    it.only("página do carrinho:",()=>{
        CarrinhoSite.acessoCarrinho()
    })
})


describe('Testes Negativos na rota Produtos',()=>{
    beforeEach(()=>{
        CarrinhoSite.acesso()
    })

})