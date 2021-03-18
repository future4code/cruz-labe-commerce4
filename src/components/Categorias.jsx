import React, { Component } from 'react'
import styled from 'styled-components'
    
export class Categorias extends Component {
  render() {
    const categorias = [
      'Todas Categorias', 'Naves', 'Foguetes', 'Ônibus Espacial'
    ]
    
    return (
      <Container >
        <List>
          {categorias.map(item => <Item key={item}><a href="javascript:void(0)" onClick={this.props.atualizarCategoria}>{item}</a></Item>)}
        </List>
      </Container>
      
    )
  }
}

const Container = styled.nav`
  flex-basis: 100%;
`
const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

const Item = styled.li`
  text-decoration: none;
`