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
})


describe('Testes Negativos na rota Produtos',()=>{
    
})