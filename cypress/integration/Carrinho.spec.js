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

    it("verifica elementos da Página carrinho",()=>{
        CarrinhoSite.elementosDaPaginaCarrinho()
    })

    it("Teste de Checkout da Compra:",()=>{
        LoginSite.efetuarLogin()
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
    it('Deve Tentar fazer checkout com CPF errado',()=>{
        LoginSite.efetuarLogin()
        CarrinhoSite.CheckoutCarrinhoComCPFErrado()
    })

})