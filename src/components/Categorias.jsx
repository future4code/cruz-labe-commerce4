import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
    
export class Categorias extends Component {
  render() {
    const categorias = [
      'todas categorias', 'naves', 'foguetes', 'ônibus espacial'
    ]
    
    return (
      <Container >
        <Paper square>
          {categorias.map(item => 
            <Tabs key={item} name='categoria' value='test'
            indicatorColor='primary' textColor='primary'
            centered
            onClick={this.props.atualizar}>
                <Tab label={item}>{item}</Tab>
            </Tabs>
          )}
        </Paper>
      </Container>
      
    )
  }
}

const Container = styled.nav`
  flex-basis: 100%;
  background-color: #333;
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
  border-radius: 20px;
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background-color: tomato;
  }
`