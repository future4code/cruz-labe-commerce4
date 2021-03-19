import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { CarrinhoItem } from './CarrinhoItem'

export class Carrinho extends Component {

  //se vier produtos: [1, 1, 2]



  render() {

    const produtos = this.props.produtos.map(produto => {
      return (
        <CarrinhoItem
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          quantidade={produto.quantidade}
          valor={produto.valor}
          excluir={this.props.excluir}
        />
      )
    })

    const total = this.props.produtos.reduce((soma, produto) =>
      soma + produto.valor * produto.quantidade, 0)

    return (
      <Container>
        {produtos}
        {total}
        <Button variant='contained'
          color='primary'
          onClick={this.props.limpar}>Limpar Tudo
          </Button>
      </Container>
    )
  }
}

const Container = styled.div`
  flex-basis: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  border: 2px #333 solid;
`