import { numeroEhValido } from './gerais'

export function adicionarItemCarrinho(id) {
  if(!numeroEhValido(id)) {
    console.warn(`Foi passado ID em formato incorreto, fica esperto!`)
    return 
  }

  let novoCarrinho = [...this.state.carrinho]
  const posicaoProduto = this.posicaoNoCarrinho(id)
  
  if (posicaoProduto !== -1) {
    novoCarrinho[posicaoProduto].quantidade++
  } else {
    novoCarrinho = [...novoCarrinho, {id, quantidade: 1}]
  }

  this.salvarDados('carrinho', novoCarrinho)
}

export function removerItemCarrinho(id) {
  if(!numeroEhValido(id)) {
    console.warn(`Foi passado ID em formato incorreto, fica esperto!`)
    return 
  }
  const novoCarrinho = [...this.state.carrinho]
  const posicaoNoCarrinho = this.posicaoNoCarrinho(id)
  
  if (novoCarrinho[posicaoNoCarrinho].quantidade === 1) {
    novoCarrinho.splice(posicaoNoCarrinho, 1)
  } else {
    novoCarrinho[posicaoNoCarrinho].quantidade--
  }
  
  this.salvarDados('carrinho', novoCarrinho)
}

// Verifica se o produto ja esta incluso no carrinho Retorna o Index do produto no carrinho do 0 em diante, ou -1 se nao tiver
export function pegarPosicaoNoCarrinho(id) {
  return this.state.carrinho.findIndex(produto => produto.id === id)
}


export function limparCarrinho() {
  this.setState({ carrinho: [] })
  localStorage.removeItem('carrinho')
}
export function montarCarrinho(produtos) {
  return this.state.carrinho.map(carrinho =>
    ({
      ...produtos.todos.find(produto => produto.id === carrinho.id),
      quantidade: carrinho.quantidade
    })
  )
}