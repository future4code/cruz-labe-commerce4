import React, { Component } from 'react'
import styled from 'styled-components'

export class CarrinhoItem extends Component{
    render() {
      const {id, nome = 'nome', quantidade = 1, valor = 100} = this.props
        return(
            <ItemContainer>
              <p>{nome} {quantidade} {valor}</p>
              <button
                onClick={() => this.props.excluir(id)}>
                  Remover
              </button>
            </ItemContainer>
        )
    }
}

const ItemContainer = styled.div`
  display: flex;
  border: 2px #333 solid;
`