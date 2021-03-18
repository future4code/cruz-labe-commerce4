import React, { Component } from 'react';
import styled from 'styled-components'
import { listaProdutos } from './assets/json'
import { numeroEhValido, pegarProdutoPeloID } from './utils'
import {
  Header, Categorias, Pesquisa, Filtro, Produtos, Carrinho
} from './components'

class App extends Component {
  state = {
    valorMin: 0,
    valorMax: 0,
    ordem: 'crescente',
    pesquisa: '',
    // itens no carrinho tem apenas ID e quantidade para pegar na listaProdutos
    carrinho: []
  }
  
  componentDidMount(){
    //primeiro carregamento, pega os dados gravados do carrinho
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'))
    
    carrinhoSalvo && this.setState({ carrinho: carrinhoSalvo })
    
  }
  
  componentDidUpdate() {
    const {valorMin, valorMax, ordem, pesquisa, categoria} = this.state

    console.table({valorMin, valorMax, ordem, pesquisa, categoria})
  }

  componentWillUnmount(){}

  // Izi control, funcao para controlar todos os inputs, jsx deve ter name=state
  controlarInput = e => {
    const {name, value} = e.target
    this.setState({ [name]: value})
  }
  
  adicionarItemCarrinho = id => {
    if(!numeroEhValido(id)) {
      console.warn(`Foi passado ID em formato incorreto, fica esperto!`)
      return 
    }

    let novoCarrinho = [...this.state.carrinho]
    
    const posicaoProduto = this.produtoJaTemNoCarrinho(id)
    
    if (posicaoProduto !== -1) {
      novoCarrinho[posicaoProduto].quantidade++
    } else {
      novoCarrinho = [...novoCarrinho, {id, quantidade: 1}]
    }
    
    //console.table(novoCarrinho)

    this.setState({ carrinho: novoCarrinho })
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
  }
  
  // Verifica se o produto ja esta incluso no carrinho
  // Retorna o Index do produto no carrinho do 0 em diante, ou -1 se nao tiver
  produtoJaTemNoCarrinho = id => 
    this.state.carrinho.findIndex(produto => produto.id === id)
  
  removerItemCarrinho = id => {
    if(!numeroEhValido(id)) {
      console.warn(`Foi passado ID em formato incorreto, fica esperto!`)
      return 
    }
    const novoCarrinho = [...this.state.carrinho]
    
    const posicaoNoCarrinho = this.produtoJaTemNoCarrinho(id)
    
    if (novoCarrinho[posicaoNoCarrinho].quantidade === 1) {
      novoCarrinho.splice(this.produtoJaTemNoCarrinho(id), 1)
    } else {
      novoCarrinho[posicaoNoCarrinho].quantidade--
    }
    
    this.setState({ carrinho: novoCarrinho})
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
  }
  
  limparCarrinho = () => {
    this.setState({ carrinho: [] })
    localStorage.removeItem('carrinho')
  }

  atualizarCategoria = event => {
   event.preventDefault()
   this.setState({ categoria: event.target.innerText })
  }
    

  render () {
    let {valorMin, valorMax, ordem, pesquisa} = this.state

    let produtosFiltrados = listaProdutos

    if (valorMin || valorMax) {
      valorMax = valorMax || Infinity
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.valor > valorMin && produto.valor < valorMax
      )
    }

    // if(categoria) {

    // }

    if(pesquisa) {
      //const regexPalavras = /\b\w*\b/ig
      //const palavras = pesquisa.match(regexPalavras)
      //console.log(pesquisa)
      produtosFiltrados = produtosFiltrados.filter(produto => {
        const palavras = new RegExp(`/${pesquisa}/gi`)
        //console.log({palavras})
        //return produto.nome.includes(pesquisa)
        return produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
        //produto.nome.search(/${pesquisa}/gi))
      })
    }

    console.log(produtosFiltrados)

    const produtosNoCarrinho = this.state.carrinho.map(carrinho =>
      ({
        ...listaProdutos.find(produto => produto.id === carrinho.id),
        quantidade: carrinho.quantidade
      })
    )

    //console.table(produtosNoCarrinho)
    

    return (
      <Container>
        <Header />
        <Categorias atualizarCategoria={this.atualizarCategoria}/>
        <Pesquisa atualizar={this.controlarInput} />
        <Filtro atualizar={this.controlarInput} />
        <Produtos 
          produtos={produtosFiltrados}
          adicionarProduto={this.adicionarItemCarrinho}
        />
        <Carrinho
        produtos={produtosNoCarrinho}
        excluir={this.removerItemCarrinho}
        limpar={this.limparCarrinho}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 80%;
  min-width: 350px;
  max-width: 1280px;

  display: flex;
  flex-flow: row wrap;

  margin: 0 auto;
  background-color: aqua;

`

export default App;
