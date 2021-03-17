import React, { Component } from 'react'
import styled from 'styled-components'
    
class Categorias extends Component {
  render() {
    return (
      <Container>
        <List>
          <Item>Todas Categorias</Item>
          <Item>Naves</Item>
          <Item>Foguetes</Item>
          <Item>Ônibus Espaciais</Item>
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
`

export default Categorias