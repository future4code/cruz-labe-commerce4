import styled from 'styled-components'
import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class Filtro extends Component {
  render() {
    return (
      <Container>
        <Title>Filtrar Pesquisas</Title>
        <br />
        <h2>Preço</h2>
        <br />
        <input onChange={this.props.atualizar} type="range" name="valorMin"
          value={this.props.valorMin} id="min" min="0" max="900" step='100' />
        <label htmlFor="min">Minimo: {this.props.valorMin}</label>
        <input onChange={this.props.atualizar} type="range" name="valorMax"
          value={this.props.valorMax} id="max" min="100" max="1000" step='100' />
        <label htmlFor="max">Máximo: {this.props.valorMax}</label>
        <br />
        <h2>Ordem</h2>
        <Select onChange={this.props.atualizar} value={this.props.ordem} name="ordem">
          <MenuItem value="recomendados">Recomendados</MenuItem>
          <MenuItem value="crescente">Crescente</MenuItem>
          <MenuItem value="decrescente">Decrescente</MenuItem>
        </Select>
        <br />
        <Button
          onClick={this.props.limpa}
          variant='contained'
          color='primary'
        >
          Limpar Filtros
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
const Title = styled.div`
    font-size: 24px;
`


