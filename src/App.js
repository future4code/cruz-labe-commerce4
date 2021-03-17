import React, { Component } from 'react';
import ListaProdutos from './assets/ListaProdutos'
import styled from 'styled-components'
import Header from './components/Header'
import Categorias from './components/Categorias'
import ProdutoCard from './components/ProdutoCard'
import Produtos from './components/Produtos'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'

class App extends Component {
  state = {
    filtros: {
      valorMin: 0,
      valorMax: 0,
      ordem: true,
      pesquisa: ""
    },
    carrinho: [
      {
        id: 1,
        quantidade: 2
      },
      { id: 3,
        quantidade: 4
      }
    ]
  }
  render () {
    //const produtos = ListaProdutos.filter(produto =>)
    
    const produtosNoCarrinho = this.state.carrinho.map(carrinho => {
      const produto = ListaProdutos.filter(produto =>
        produto.id === carrinho.id
      )
      
      const itemCarrinho = {...produto, quantidade: carrinho.quantidade}
      
      return itemCarrinho
    })

    console.log(produtosNoCarrinho)

    return (
      <Container>
        <Header />
        <Categorias />
        <Filtro/>
        <Produtos/>
        <Carrinho produtos={produtosNoCarrinho}/>
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
