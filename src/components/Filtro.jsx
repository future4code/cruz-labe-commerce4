import styled from 'styled-components'
import React, { Component } from 'react'
    
export class Filtro extends Component {
  render() {
    return (
      <Container>
          <Title>Filtrar Pesquisas</Title>
          <h2>Preço</h2>
          <input type="range" name="valorMin" id="min" min="0" max="100"/>
          <label htmlFor="min">Minimo</label>
          <input type="range" name="valorMax" id="max" min="101" max="1000"/>
          <label htmlFor="min">Máximo</label>
          <h2>Ordem</h2>
          <select name="ordem">
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
          </select>
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
const Title = styled.div`
    font-size: 16px;
`