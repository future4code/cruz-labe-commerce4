import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
    
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
                <Typography variant='h4'>{item}</Typography>
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
  background-color: #333;
  width: 20%;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`