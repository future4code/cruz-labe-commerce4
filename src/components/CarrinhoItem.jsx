import React, { Component } from 'react'
import styled from 'styled-components'

class CarrinhoItem extends Component{
    render() {
      const {nome = 'nome', quantidade = 1, valor = 100} = this.props
        return(
            <ItemContainer>
              <p>{nome} {quantidade} {valor}</p>
            </ItemContainer>
        )
    }
}

export default CarrinhoItem

const ItemContainer = styled.div`
  display: flex;
  border: 2px #333 solid;
`