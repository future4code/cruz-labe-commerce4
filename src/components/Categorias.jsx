import React, { Component } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
    
export class Categorias extends Component {
  render() {
    return (
      <Container >
        <Paper square>
            <Tabs
              name='categoria'
              value={this.props.categoriaAtual}
              centered
              onChange={this.props.atualizar}>
                {this.props.categorias.map((c,i) => <Tab label={c} key={i}/>)}
            </Tabs>
        </Paper>
      </Container>
      
    )
  }
}

const Container = styled.nav`
  flex-basis: 100%;
`