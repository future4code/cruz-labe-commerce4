// Utilidades para usar no projetinho e ficar mais organizado
import { listaProdutos } from '../assets/json'

export const pegarProdutoPeloID = id =>
    Number.isInteger(id) &&
    id > 0 &&
    listaProdutos.find(item => item.id === id)

export function objetoProdutoFunction(lista, categorias){
  this.todos = lista
  this.filtrados = lista
  this.categorias = categorias
  this.filtrar = callback => 
    this.filtrados = this.filtrados.filter(callback)
  this.ordenar = callback =>
    this.filtrados = this.filtrados.sort(callback)
}

export class objetoProduto {
  constructor(lista, categorias) {
    this.todos = lista
    this.filtrados = lista
    this.categorias = categorias
  }
  filtrar = callback => this.filtrados = this.filtrados.filter(callback)
  ordenar = callback => this.filtrados = this.filtrados.sort(callback)
}

export const filtrarProdutos = (state, produtos) => {
  let {valorMin, valorMax, ordem, pesquisa, categoria} = state

  if (valorMin || valorMax) {
    valorMax = valorMax || Infinity
    produtos.filtrar(produto => 
      produto.valor > valorMin && produto.valor < valorMax)
  }

  if(categoria) {
    produtos.filtrar(produto =>
      produto.categoria === produtos.categorias[this.state.categoria]
    )
  }

  if(pesquisa) {
    const buscarLetras = new RegExp(`${pesquisa}`, 'i')
    produtos.filtrar(produto => buscarLetras.test(produto.nome))
  }
  

  if(ordem === 'crescente') {
    produtos.ordenar((itemA, itemB) => itemA.valor - itemB.valor)
  } else if (ordem === 'decrescente'){
    produtos.ordenar((itemA, itemB) => itemB.valor - itemA.valor)
  }
}