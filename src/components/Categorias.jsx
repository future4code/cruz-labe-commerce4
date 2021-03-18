import React, { Component } from 'react'
import styled from 'styled-components'
    
export class Categorias extends Component {
  render() {
    const categorias = [
      'todas categorias', 'naves', 'foguetes', 'ônibus espacial'
    ]
    
    return (
      <Container >
        <List>
          {categorias.map(item => 
            <Item key={item} name='categoria' onClick={this.props.atualizar}>
                {item}
            </Item>
          )}
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