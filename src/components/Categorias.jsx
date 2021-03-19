import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
    
export class Categorias extends Component {
  state = { categoriaAtual: 'todas categorias'}
  
  atualizarCategoria = (e, c) => {
    this.setState({ categoriaAtual: c })
  }

  render() {
    const categorias = [
      'todas categorias', 'naves', 'foguetes', 'ônibus espacial'
    ]
    
    return (
      <Container >
        <Paper square>
            <Tabs
              name='categoria'
              value={this.state.categoriaAtual}
              centered
              onChange={this.atualizarCategoria}>
                {categorias.map(c => <Tab label={c}/>)}
            </Tabs>
        </Paper>
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
  width: 20%;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background-color: tomato;
  }
`