import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'


export class CarrinhoItem extends Component {
  render() {
    const { id, nome = 'nome', quantidade = 1, valor = 100 } = this.props
    return (
      <ItemContainer>
        <p>{nome} {quantidade} {valor}</p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => this.props.excluir(id)}>
          Remover
              </Button>
      </ItemContainer>
    )
  }
}

const ItemContainer = styled.div`
  display: flex;
  border: 2px #333 solid;
`