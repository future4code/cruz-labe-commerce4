import React, { Component } from 'react';
import { listaProdutos, listaCategorias } from '../assets/json'
import { objetoProduto, filtrarProdutos } from '../utils/metodosProduto'

import { adicionarItemCarrinho, removerItemCarrinho,
  pegarPosicaoNoCarrinho, limparCarrinho, montarCarrinho}
  from '../utils/metodosCarrinho'
import { salvarDados, restaurarDados, removerDados, }
  from '../utils/controleDados'
import {
  Header, Categorias, Pesquisa, Filtro, Produtos, Carrinho
} from '../components'
import { ContainerPrincipal } from '../styles'

class Home extends Component {
  constructor(argumentos) {
    super(argumentos)
    //Utils para controlar os dados no localStorage
    this.salvarDados = salvarDados.bind(this)
    this.restaurarDados = restaurarDados.bind(this)
    this.removerDados = removerDados.bind(this)
    
    //Utils para operacoes com o carrinho
    this.adicionarItemCarrinho = adicionarItemCarrinho.bind(this)
    this.removerItemCarrinho = removerItemCarrinho.bind(this)
    this.posicaoNoCarrinho = pegarPosicaoNoCarrinho.bind(this)
    this.limparCarrinho = limparCarrinho.bind(this)
    this.montarCarrinho = montarCarrinho.bind(this)
    
    //utils para filtrar os produtos
  }

  state = {
    valorMin: 0,
    valorMax: 1000,
    ordem: 'recomendados',
    pesquisa: '',
    categoria: 0, //Categoria 0 = todas, 1 em diante para cada categoria
    carrinho: []
  }
  
  componentDidMount(){
    this.restaurarDados('carrinho')
  }
  
  // Izi control, funcao para controlar todos os inputs, jsx deve ter name=state
  controlarInput = e => {
    let {name, value} = e.target
    value = name.includes('valor') ? Number(value) : String(value)
    
    //Verificar para nao permitir valorMin maior que valorMax e viceversa
    if (name === 'valorMax' && value <= this.state.valorMin) {
      this.setState({ [name]: value, valorMin: value - 100})
    } else if (name === 'valorMin' && value >= this.state.valorMax){
      this.setState({ [name]: value, valorMax: value + 100})
    } else {
      this.setState({ [name]: value})
    }
  }

  limpaPesquisa = () =>
    this.setState({ valorMin: 0, valorMax: 1000, ordem: "recomendados" })

  atualizarCategoria = (e, valor) => this.setState({ categoria: valor})
  
  render () {
    let produtos = new objetoProduto(listaProdutos, listaCategorias)
    filtrarProdutos.call(this, produtos)
    const produtosNoCarrinho = this.montarCarrinho(produtos)   

    return (
        <ContainerPrincipal>
        <Header />
        <Categorias 
          categorias={produtos.categorias}
          categoriaAtual={this.state.categoria}
          atualizar={this.atualizarCategoria}/>
        <Pesquisa
          valor={this.state.pesquisa}
          atualizar={this.controlarInput}
        />
        <Filtro 
          atualizar={this.controlarInput}
          valorMin={this.state.valorMin}
          valorMax={this.state.valorMax}
          ordem={this.state.ordem}
          limpa={this.limpaPesquisa}
        />
        <Produtos 
          produtos={produtos.filtrados}
          adicionarProduto={this.adicionarItemCarrinho}
        />
        <Carrinho
          produtos={produtosNoCarrinho}
          excluir={this.removerItemCarrinho}
          limpar={this.limparCarrinho}
        />
      </ContainerPrincipal>
    );
  }
}

export default Home;