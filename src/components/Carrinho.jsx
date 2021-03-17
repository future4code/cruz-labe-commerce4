import React, { Component } from 'react'
import styled from 'styled-components'

import CarrinhoItem from './CarrinhoItem'

class Carrinho extends Component{


    render() {

      const produtos = this.props.produtos.map(produto => {
        return (
          <CarrinhoItem
          nome={produto.nome}
          quantidade={produto.quantidade}
          valor={produto.valor}
          />
        )
      })

      const total = this.props.produtos.reduce((soma, produto) => soma + produto.valor, 0)

      return(
          <Container>
            {produtos}
            {total}
          </Container>
      )
    }
}

export default Carrinho

const Container = styled.div`
  flex-basis: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  border: 2px #333 solid;
`