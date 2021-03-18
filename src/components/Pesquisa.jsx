import React, { Component } from 'react'
import styled from 'styled-components'
    
export class Pesquisa extends Component {
  render() {
    return (
      <Container>
        <CampoPesquisa
          name='pesquisa'
          value={this.props.valor}
          onChange={this.props.atualizar}
          placeholder='Pesquisar produtos...'
        />
      </Container>
      
    )
  }
}

const Container = styled.div`
  flex-basis: 100%;

  display: flex;
  justify-content: center;
`
const CampoPesquisa = styled.input.attrs({ type: 'search' }) `
  width: 50%;
  height: 80px;

`